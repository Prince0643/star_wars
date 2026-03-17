export type Workflow = {
  id: number
  name: string
  tools: string[]
  summary: string
  steps: string[]
  imageSrc: string
}

export const workflows: Workflow[] = [
  {
    id: 1,
    name: 'Lead Capture Flow',
    tools: ['Make', 'GoHighLevel'],
    summary: 'Webform → CRM → notifications',
    steps: ['Trigger on form submit', 'Create/update contact in CRM', 'Notify team + start sequence'],
    imageSrc: 'https://storage.googleapis.com/msgsndr/GdMRGdDjLK7VU8vqmI2J/media/68397a87ed0d61354d208bed.png',
  },
  {
    id: 2,
    name: 'Course Enrollment Flow',
    tools: ['n8n', 'Kajabi', 'HubSpot'],
    summary: 'Enrollment → CRM tagging → onboarding',
    steps: ['Trigger on new enrollment', 'Tag + segment in CRM', 'Send onboarding + track progress'],
    imageSrc: 'https://storage.googleapis.com/msgsndr/GdMRGdDjLK7VU8vqmI2J/media/68397ab1adbd8fe51b45efb4.svg',
  },
  {
    id: 3,
    name: 'AI Lead Qualification',
    tools: ['OpenAI', 'Make', 'Airtable'],
    summary: 'Inbound lead → AI scoring → prioritized routing',
    steps: ['Webhook receives lead data', 'AI analyzes lead quality + intent', 'Auto-score and route to appropriate sales tier'],
    imageSrc: 'https://storage.googleapis.com/msgsndr/nb61f4OQ7o9Wsxx0zOsY/media/68d36bb2037a1358e0eb6266.svg',
  },
  {
    id: 4,
    name: 'Facebook CAPI Pipeline',
    tools: ['Meta CAPI', 'n8n', 'Shopify'],
    summary: 'Server-side event tracking for iOS 14+ signal loss',
    steps: ['Capture purchase events server-side', 'Hash customer data for privacy', 'Send to Meta Conversions API'],
    imageSrc: 'https://storage.googleapis.com/msgsndr/GdMRGdDjLK7VU8vqmI2J/media/683823c4a4231565ebcf430c.svg',
  },
  {
    id: 5,
    name: 'AI Content Generation',
    tools: ['Claude', 'Make', 'Webflow'],
    summary: 'Data feed → AI-generated pages → auto-publish',
    steps: ['Trigger on content calendar', 'AI generates SEO-optimized copy', 'Publish to CMS + notify team'],
    imageSrc: 'https://storage.googleapis.com/msgsndr/nb61f4OQ7o9Wsxx0zOsY/media/68d36bb2e1ce458646ef9b9d.svg',
  },
  {
    id: 6,
    name: 'Meta + CRM Attribution Loop',
    tools: ['Meta Pixel', 'HubSpot', 'Zapier'],
    summary: 'Ad click → offline conversion → value optimization',
    steps: ['Track website events with Pixel', 'Match CRM closed-won to click ID', 'Send offline conversions back to Meta'],
    imageSrc: 'https://storage.googleapis.com/msgsndr/nb61f4OQ7o9Wsxx0zOsY/media/68d36bb2e1ce457ea1ef9b9c.svg',
  },
  {
    id: 7,
    name: 'AI Support Ticket Routing',
    tools: ['OpenAI', 'Intercom', 'Slack'],
    summary: 'Incoming ticket → AI classification → smart routing',
    steps: ['AI reads ticket content', 'Classifies urgency + category', 'Routes to right agent with context'],
    imageSrc: 'https://storage.googleapis.com/msgsndr/nb61f4OQ7o9Wsxx0zOsY/media/68d36bb2e1ce458646ef9b9d.svg',
  },
  {
    id: 8,
    name: 'Multi-Platform Event Sync',
    tools: ['Meta CAPI', 'Google CAPI', 'n8n'],
    summary: 'One event source → all ad platforms',
    steps: ['Normalize conversion events', 'Send to Meta, Google, TikTok APIs', 'Deduplicate across channels'],
    imageSrc: 'https://storage.googleapis.com/msgsndr/nb61f4OQ7o9Wsxx0zOsY/media/68d36bb2e1ce457ea1ef9b9c.svg',
  },
]
