import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {
  GenerateSEOAction,
  GenerateTagsAction,
  GenerateSummaryAction,
  GenerateCTAAction,
} from './actions/aiAssistActions'

// The base URL of the live frontend — update to production URL when deployed
const FRONTEND_URL = process.env.SANITY_STUDIO_FRONTEND_URL ?? 'http://localhost:8080'

export default defineConfig({
  name: 'default',
  title: 'Tandem Bridge CMS Terminal',

  projectId: 'ud8yaali',
  dataset: 'production',
  appId: 'ven9zgggv2mriocf2s74uwlk',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: `${FRONTEND_URL}/api/draft`,
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, {schemaType}) => {
      const aiTypes = ['blog', 'caseStudy', 'hiringGuide', 'insight']
      if (!aiTypes.includes(schemaType)) return prev

      const aiActions = [GenerateSEOAction, GenerateSummaryAction, GenerateTagsAction]
      const ctaTypes = ['blog', 'caseStudy']
      if (ctaTypes.includes(schemaType)) aiActions.push(GenerateCTAAction)

      return [...prev, ...aiActions]
    },
  },
})
