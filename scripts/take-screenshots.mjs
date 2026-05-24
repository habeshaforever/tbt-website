#!/usr/bin/env node
/**
 * Manual Playwright Screenshot Script
 * Run with: node scripts/take-screenshots.mjs
 * 
 * Takes full-page desktop (1920x1080) and mobile (375x812) screenshots
 * of all local website pages with slow scrolling to load animations.
 * Saves to: /design-screenshots/ in the project root
 */

import { chromium } from 'playwright';
import { existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuration
const BASE_URL = 'http://localhost:8081'; // Vite dev server (auto-detected port)
const OUTPUT_DIR = join(__dirname, '..', 'design-screenshots');

// Viewport sizes
const DESKTOP = { width: 1920, height: 1080 };
const MOBILE = { width: 375, height: 812 };

// All routes from App.tsx (skipping parameterized routes that need specific data)
const ROUTES = [
  '/',
  '/book',
  '/why-tbt',
  '/why-nearshore',
  '/why-colombia',
  '/our-process',
  '/nearshore-vs-offshore',
  '/our-story',
  '/careers',
  '/solutions/managed-staffing',
  '/solutions/recruiting-direct-hire',
  '/bpo',
  '/industries/customer-service',
  '/industries/financial-services',
  '/industries/healthcare',
  '/industries/legal',
  '/industries/it-software',
  '/industries/marketing',
  '/industries/logistics',
  '/industries/manufacturing',
  '/industries/professional-services',
  '/industries/saas',
  '/industries/ecommerce',
  '/industries/real-estate',
  '/resources',
  '/resources/blog',
  '/resources/case-studies',
  '/resources/hiring-guides',
  '/resources/insights',
  '/roles',
];

/**
 * Slowly scroll through the page to trigger lazy loading and animations
 */
async function slowScroll(page) {
  // Get page height
  const getHeight = () => document.documentElement.scrollHeight;
  const pageHeight = await page.evaluate(getHeight);
  const viewportHeight = await page.evaluate(() => window.innerHeight);
  
  // Calculate scroll steps (scroll ~100px at a time with delays)
  const totalSteps = Math.ceil(pageHeight / 100);
  
  console.log(`  Scrolling through ${pageHeight}px in ${totalSteps} steps...`);
  
  for (let i = 0; i <= totalSteps; i++) {
    const scrollPosition = Math.min(i * 100, pageHeight - viewportHeight);
    await page.evaluate((pos) => window.scrollTo(0, pos), scrollPosition);
    await page.waitForTimeout(100); // 100ms delay between scrolls
    
    // Trigger any animations in view
    await page.evaluate(() => {
      document.querySelectorAll('[data-animate], .animate-on-scroll').forEach(el => {
        el.classList.add('animate-visible');
      });
    });
  }
  
  // Scroll back to top and wait for any final animations
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  
  // One more slow pass to capture mid-page animations
  for (let i = 0; i <= totalSteps; i++) {
    const scrollPosition = Math.min(i * 100, pageHeight - viewportHeight);
    await page.evaluate((pos) => window.scrollTo(0, pos), scrollPosition);
    await page.waitForTimeout(50);
  }
  
  // Final scroll to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
}

/**
 * Take full-page screenshot for a specific viewport
 */
async function takeScreenshot(page, route, viewportName, viewportSize) {
  const slug = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '_');
  const filename = `${slug}_${viewportName}.png`;
  const filepath = join(OUTPUT_DIR, filename);
  
  // Set viewport
  await page.setViewportSize(viewportSize);
  
  // Navigate with waitUntil networkidle to ensure everything loads
  const url = `${BASE_URL}${route}`;
  console.log(`  [${viewportName}] Loading ${url}...`);
  
  try {
    await page.goto(url, { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
  } catch (e) {
    console.log(`  Warning: networkidle timeout, continuing...`);
  }
  
  // Wait for fonts and initial render
  await page.waitForTimeout(500);
  
  // Slow scroll to trigger all animations and lazy loading
  await slowScroll(page);
  
  // Take full-page screenshot
  await page.screenshot({ 
    path: filepath, 
    fullPage: true,
    type: 'png'
  });
  
  console.log(`  ✓ Saved: ${filename}`);
}

/**
 * Main screenshot process
 */
async function main() {
  console.log('========================================');
  console.log('TandemBridge Website Screenshot Tool');
  console.log('========================================');
  console.log(`Output directory: ${OUTPUT_DIR}`);
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Routes to capture: ${ROUTES.length}`);
  console.log('');
  
  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  }
  
  // Launch browser
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  
  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    let successCount = 0;
    let failCount = 0;
    
    for (const route of ROUTES) {
      console.log(`\n[${ROUTES.indexOf(route) + 1}/${ROUTES.length}] ${route || '/'}`);
      
      try {
        // Desktop screenshot
        await takeScreenshot(page, route, 'desktop', DESKTOP);
        
        // Mobile screenshot
        await takeScreenshot(page, route, 'mobile', MOBILE);
        
        successCount++;
      } catch (error) {
        console.error(`  ✗ Error capturing ${route}: ${error.message}`);
        failCount++;
      }
    }
    
    console.log('\n========================================');
    console.log('Screenshot Complete!');
    console.log('========================================');
    console.log(`Success: ${successCount}/${ROUTES.length}`);
    console.log(`Failed: ${failCount}/${ROUTES.length}`);
    console.log(`\nScreenshots saved to: ${OUTPUT_DIR}`);
    
  } finally {
    await browser.close();
  }
}

// Run the script
main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
