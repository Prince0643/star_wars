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
]
