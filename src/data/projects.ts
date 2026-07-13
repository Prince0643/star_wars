export type ProjectType = 'web' | 'mobile' | 'automation'

export type Project = {
  id: number
  name: string
  type: ProjectType
  description: string
  imageSrc: string
  tech: string[]
  year: string
  highlights: string[]
  url: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Nexiflow',
    type: 'web',
    description: 'Time tracking system with project management features for teams and client work.',
    imageSrc: '/uploads/nexiflow.png',
    tech: [],
    year: '2024',
    highlights: ['Time tracking and reporting', 'Project and task management', 'Team productivity oversight'],
    url: 'https://nexi-flow.com/',
  },
  {
    id: 2,
    name: 'Dominate Diabetes',
    type: 'web',
    description: '21-day guided food system for lowering A1C naturally and stabilizing blood sugar.',
    imageSrc: '/uploads/dominatediabetes.png',
    tech: [],
    year: '2024',
    highlights: ['21-day guided challenge', 'Blood sugar and A1C-focused positioning', 'Health offer landing page'],
    url: 'https://dominatediabetesnow.com/',
  },
  {
    id: 3,
    name: 'Knew PH',
    type: 'web',
    description: 'Modern web platform for Knew PH',
    imageSrc: '/uploads/knew.png',
    tech: [],
    year: '2026',
    highlights: ['Modern web platform', 'Responsive design', 'Professional web presence'],
    url: 'https://knewph.xandree.com/',
  },
  {
    id: 4,
    name: 'Mystical Mischief',
    type: 'web',
    description: 'Fantasy-themed interactive web experience for the world of Evernyth.',
    imageSrc: '/uploads/mysticalmischief.png',
    tech: [],
    year: '2026',
    highlights: ['Fantasy landing experience', 'Immersive visual design', 'Responsive web presence'],
    url: 'https://mysticalmischief.me/',
  },
  {
    id: 5,
    name: 'Era Aesthetics',
    type: 'web',
    description: 'Permanent makeup and brow enhancement studio',
    imageSrc: '/uploads/era-aesthetics.png',
    tech: [],
    year: '2026',
    highlights: ['Permanent makeup services', 'Online booking and inquiries', 'Aftercare and training resources'],
    url: 'https://app.gohighlevel.com/v2/preview/rzuM4YZ1NXi4viW9iRkR',
  },
  {
    id: 6,
    name: 'Nexistry Core',
    type: 'web',
    description:
      'All-in-one operating system for service businesses—CRM, bookings, follow-ups, payments, automation, and AI support.',
    imageSrc: '/uploads/nexistry-core.png',
    tech: [],
    year: '2026',
    highlights: ['All-in-one CRM + pipeline', 'Bookings, payments, and follow-ups', 'Automation and AI-assisted support'],
    url: 'https://nexistrycoreglobal.com/',
  },
  {
    id: 7,
    name: 'Elijah Pantam',
    type: 'web',
    description: 'Personal portfolio / landing page.',
    imageSrc: '/uploads/elijah.png',
    tech: [],
    year: '2026',
    highlights: ['Portfolio-style landing page', 'Clear service/offer positioning', 'Mobile-friendly layout'],
    url: 'https://core.nexistrydigitalsolutions.com/v2/preview/LKyiXA2orl7TJVccBUok',
  },
]
