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
    description: 'Workflow automation and business process management platform',
    imageSrc: '/uploads/nexiflow.png',
    tech: [],
    year: '2024',
    highlights: ['Streamlined workflow automation', 'Business process optimization', 'Digital solution management'],
    url: 'https://nexiflow-new.nexistrydigitalsolutions.com/',
  },
  {
    id: 2,
    name: 'ProcureSys',
    type: 'web',
    description: 'Procurement management system for streamlined purchasing workflows',
    imageSrc: '/uploads/procurement.png',
    tech: [],
    year: '2024',
    highlights: ['Procurement automation', 'Purchase workflow management', 'Inventory tracking'],
    url: 'https://procurement.xandree.com/',
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
    name: 'Constra',
    type: 'web',
    description: 'Construction management and project tracking platform',
    imageSrc: '/uploads/constra.png',
    tech: [],
    year: '2026',
    highlights: ['Project tracking', 'Construction management', 'Team coordination'],
    url: 'https://constra.xandree.com/',
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
