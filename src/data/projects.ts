export type ProjectType = 'web' | 'mobile' | 'automation'

export type Project = {
  id: number
  name: string
  type: ProjectType
  description: string
  tech: string[]
  year: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'E-commerce Galaxy',
    type: 'web',
    description: 'Full-stack e-commerce platform',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    year: '2024',
    highlights: ['Built with React and Node.js', 'PostgreSQL for product catalog', 'Integrated payment gateway'],
  },
  {
    id: 2,
    name: 'CRM Integration Hub',
    type: 'web',
    description: 'Centralized CRM dashboard connecting GoHighLevel and HubSpot',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'HubSpot API', 'GoHighLevel API'],
    year: '2024',
    highlights: ['Synced data between multiple CRMs', 'Automated contact sync', 'Custom reporting dashboard'],
  },
  {
    id: 3,
    name: 'TaskFlow Mobile',
    type: 'mobile',
    description: 'Cross-platform task management app',
    tech: ['Flutter', 'React Native', 'Firebase', 'Supabase'],
    year: '2023',
    highlights: ['Built with Flutter for iOS/Android', 'Firebase for real-time sync', 'Offline-first architecture'],
  },
  {
    id: 4,
    name: 'Field Service Pro',
    type: 'mobile',
    description: 'Mobile app for field service management with CRM integration',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Kajabi API', 'n8n'],
    year: '2024',
    highlights: ['Offline capability with sync', 'Integrated with Kajabi for course access', 'n8n workflows for automated notifications'],
  },
]
