export type Workflow = {
  id: number
  name: string
  tools: string[]
  summary: string
  steps: string[]
}

export const workflows: Workflow[] = [
  {
    id: 1,
    name: 'Lead Capture Flow',
    tools: ['Make', 'GoHighLevel'],
    summary: 'Webform → CRM → notifications',
    steps: ['Trigger on form submit', 'Create/update contact in CRM', 'Notify team + start sequence'],
  },
  {
    id: 2,
    name: 'Course Enrollment Flow',
    tools: ['n8n', 'Kajabi', 'HubSpot'],
    summary: 'Enrollment → CRM tagging → onboarding',
    steps: ['Trigger on new enrollment', 'Tag + segment in CRM', 'Send onboarding + track progress'],
  },
  {
    id: 3,
    name: 'AI Lead Qualification',
    tools: ['OpenAI', 'Make', 'Airtable'],
    summary: 'Inbound lead → AI scoring → prioritized routing',
    steps: ['Webhook receives lead data', 'AI analyzes lead quality + intent', 'Auto-score and route to appropriate sales tier'],
  },
  {
    id: 4,
    name: 'Facebook CAPI Pipeline',
    tools: ['Meta CAPI', 'n8n', 'Shopify'],
    summary: 'Server-side event tracking for iOS 14+ signal loss',
    steps: ['Capture purchase events server-side', 'Hash customer data for privacy', 'Send to Meta Conversions API'],
  },
  {
    id: 5,
    name: 'AI Content Generation',
    tools: ['Claude', 'Make', 'Webflow'],
    summary: 'Data feed → AI-generated pages → auto-publish',
    steps: ['Trigger on content calendar', 'AI generates SEO-optimized copy', 'Publish to CMS + notify team'],
  },
  {
    id: 6,
    name: 'Meta + CRM Attribution Loop',
    tools: ['Meta Pixel', 'HubSpot', 'Zapier'],
    summary: 'Ad click → offline conversion → value optimization',
    steps: ['Track website events with Pixel', 'Match CRM closed-won to click ID', 'Send offline conversions back to Meta'],
  },
  {
    id: 7,
    name: 'AI Support Ticket Routing',
    tools: ['OpenAI', 'Intercom', 'Slack'],
    summary: 'Incoming ticket → AI classification → smart routing',
    steps: ['AI reads ticket content', 'Classifies urgency + category', 'Routes to right agent with context'],
  },
  {
    id: 8,
    name: 'Multi-Platform Event Sync',
    tools: ['Meta CAPI', 'Google CAPI', 'n8n'],
    summary: 'One event source → all ad platforms',
    steps: ['Normalize conversion events', 'Send to Meta, Google, TikTok APIs', 'Deduplicate across channels'],
  },
]
