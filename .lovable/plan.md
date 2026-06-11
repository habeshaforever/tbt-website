

# Site Restructure: Two Equal Solutions with Unified Role Pages

## Overview

This plan reorganizes the Tandem Bridge Talent website to present **Managed Staffing** and **Recruiting and Direct Hire** as two equal primary services under a unified "Solutions" navigation. Role pages will support both services through an in-page selector rather than duplicating pages.

## Summary of Changes

1. **Navigation**: Rename "Staffing Solutions" to "Solutions" with two primary service links
2. **New Pages**: Create two solution pillar pages (`/solutions/managed-staffing` and `/solutions/recruiting-direct-hire`)
3. **Role Pages**: Refactor to include a service selector that toggles content between both offerings
4. **URL Structure**: Move role pages from `/staffing/:category` to `/roles/:category`
5. **Footer & Links**: Update all internal links to reflect new structure

---

## Part 1: Navigation Updates

### Header Navigation Structure

Current structure:
```text
Staffing Solutions (dropdown with role categories)
```

New structure:
```text
Solutions
  ├── Managed Staffing → /solutions/managed-staffing
  ├── Recruiting & Direct Hire → /solutions/recruiting-direct-hire
  └── Browse by Role (submenu with role categories, "View All Roles" link)
```

Changes to `src/components/Header.tsx`:
- Rename "Staffing Solutions" label to "Solutions"
- Add two primary service links at the top of the dropdown
- Keep role categories as a "Browse by Role" subsection
- Add "View All Roles" link pointing to `/roles`
- Update all role links from `/staffing/...` to `/roles/...`

---

## Part 2: New Solution Pillar Pages

### A) Managed Staffing Page (`/solutions/managed-staffing`)

**Route**: `/solutions/managed-staffing`
**File**: `src/pages/solutions/ManagedStaffingPage.tsx`

**Sections**:
1. **Hero**: Title, subtitle, short description of ongoing team management
2. **What Is Managed Staffing**: One paragraph explaining the service
3. **What Is Included** (bullet list):
   - Payroll administration
   - HR operations
   - Compliance support
   - Onboarding support
   - Performance support
   - Replacement guarantee
4. **How It Works** (4 steps):
   - Step 1: Discovery and role definition
   - Step 2: Talent sourcing and vetting
   - Step 3: Onboarding and integration
   - Step 4: Ongoing management and support
5. **Popular Roles**: Cards linking to role pages (e.g., Customer Care, Executive Assistants, Accounting, Developers)
6. **CTA**: "Schedule a Consultation" button linking to `/contact`

### B) Recruiting and Direct Hire Page (`/solutions/recruiting-direct-hire`)

**Route**: `/solutions/recruiting-direct-hire`
**File**: `src/pages/solutions/RecruitingDirectHirePage.tsx`

**Sections**:
1. **Hero**: Title, subtitle, short description of one-time hiring
2. **What Is Recruiting and Direct Hire**: One paragraph explaining the service
3. **What You Deliver** (bullet list):
   - Candidate sourcing
   - Rigorous vetting
   - Curated shortlist
   - Interview coordination
   - Reference checks
   - Optional skills screening
4. **How It Works** (4 steps):
   - Step 1: Define your ideal candidate
   - Step 2: We source and vet candidates
   - Step 3: Review shortlist and interview
   - Step 4: Make your hire
5. **Roles We Recruit**: Cards linking to role pages
6. **CTA**: "Schedule a Consultation" button linking to `/contact`

---

## Part 3: Role Pages with Service Selector

### URL Change

- **Current**: `/staffing/:category`
- **New**: `/roles/:category`

### File Updates

**File**: `src/pages/roles/RolePage.tsx` (renamed from `src/pages/staffing/StaffingPage.tsx`)

### New Functionality

Add a **service selector** at the top of each role page with two options:
- Managed Staffing
- Recruiting and Direct Hire

The selector will be implemented using the existing Tabs component from `@radix-ui/react-tabs`.

### Content Structure per Service Selection

**When "Managed Staffing" is selected**:
- **Description**: "Ongoing team support after hire. We manage your team so you can focus on your business."
- **What We Manage After Hire** (bullets):
  - Payroll administration
  - HR operations
  - Compliance support
  - Onboarding support
  - Performance support
  - Replacement guarantee
- **Best For** (2-3 bullets):
  - Companies scaling remote teams
  - Businesses that want hands-off HR and payroll
  - Teams needing ongoing support and accountability
- **Next Steps**: CTA to schedule consultation

**When "Recruiting and Direct Hire" is selected**:
- **Description**: "One-time hiring. We find the talent, you hire them directly."
- **What We Deliver** (bullets):
  - Candidate sourcing
  - Rigorous vetting
  - Curated shortlist
  - Interview coordination
  - Reference checks
- **Best For** (2-3 bullets):
  - Companies with internal HR capacity
  - One-time or project-based hiring needs
  - Businesses that prefer direct employment relationships
- **Next Steps**: CTA to schedule consultation

### Clarity Line

Add this guidance text near the role selector:

> "Choose Managed Staffing if you want us to run the team. Choose Recruiting and Direct Hire if you only need the hire."

---

## Part 4: Roles Index Page (Optional Enhancement)

**Route**: `/roles`
**File**: `src/pages/roles/RolesIndexPage.tsx`

A simple listing page showing all available roles organized by category, with the clarity line at the top.

---

## Part 5: Routing Updates

### Changes to `src/App.tsx`

Add new routes:
```text
/solutions/managed-staffing → ManagedStaffingPage
/solutions/recruiting-direct-hire → RecruitingDirectHirePage
/roles/:category → RolePage
/roles → RolesIndexPage (optional)
```

Keep legacy redirect:
- `/staffing/:category` → redirect to `/roles/:category` for backwards compatibility

---

## Part 6: Footer Updates

### Changes to `src/components/Footer.tsx`

Update the "Solutions" column:
```text
Solutions
  ├── Managed Staffing → /solutions/managed-staffing
  ├── Recruiting & Direct Hire → /solutions/recruiting-direct-hire
  └── Browse All Roles → /roles
```

---

## Part 7: Homepage Services Section

### Changes to `src/components/Services.tsx`

- Update section title from "Staffing Solutions" to "Solutions"
- Add two primary service cards at the top (Managed Staffing, Recruiting and Direct Hire)
- Keep role cards below as "Browse by Role" subsection
- Add clarity line: "Choose Managed Staffing if you want us to run the team. Choose Recruiting and Direct Hire if you only need the hire."

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/pages/solutions/ManagedStaffingPage.tsx` | Managed Staffing pillar page |
| `src/pages/solutions/RecruitingDirectHirePage.tsx` | Recruiting and Direct Hire pillar page |
| `src/pages/roles/RolePage.tsx` | Refactored role page with service selector |
| `src/pages/roles/RolesIndexPage.tsx` | Index page for all roles |

## Files to Modify

| File | Changes |
|------|---------|
| `src/App.tsx` | Add new routes, update staffing route |
| `src/components/Header.tsx` | Restructure Solutions dropdown, update links |
| `src/components/Footer.tsx` | Update Solutions links |
| `src/components/Services.tsx` | Add service cards, update section structure |

## Files to Delete

| File | Reason |
|------|--------|
| `src/pages/staffing/StaffingPage.tsx` | Replaced by `src/pages/roles/RolePage.tsx` |

---

## Technical Details

### Service Selector Implementation

The role page service selector will use the existing Radix UI Tabs component:

```text
+----------------------------------+
| Managed Staffing | Recruiting... |  ← Tab triggers
+----------------------------------+
| [Selected tab content]           |
|                                  |
+----------------------------------+
```

State will be managed with React's `useState` hook, defaulting to "Managed Staffing".

### Data Structure Update

The `staffingData` object in `RolePage.tsx` will be expanded to include service-specific content:

```text
roleData = {
  "customer-care": {
    title: "Customer Care",
    icon: HeadphonesIcon,
    roles: [...],
    managedStaffing: {
      description: "...",
      whatWeManage: [...],
      bestFor: [...]
    },
    recruitingDirectHire: {
      description: "...",
      whatWeDeliver: [...],
      bestFor: [...]
    }
  }
}
```

---

## Implementation Order

1. Create solution pillar pages (`ManagedStaffingPage.tsx`, `RecruitingDirectHirePage.tsx`)
2. Create roles index page (`RolesIndexPage.tsx`)
3. Refactor role page with service selector (`RolePage.tsx`)
4. Update routing in `App.tsx`
5. Update Header navigation
6. Update Footer links
7. Update Services section on homepage
8. Remove old staffing page

