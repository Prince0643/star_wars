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
    imageSrc: 'https://api.microlink.io/?url=https://nexiflow-new.nexistrydigitalsolutions.com/&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark',
    tech: [],
    year: '2024',
    highlights: ['Streamlined workflow automation', 'Business process optimization', 'Digital solution management'],
    url: 'https://nexiflow-new.nexistrydigitalsolutions.com/',
  },
  {
    id: 2,
    name: 'JAJR',
    type: 'web',
    description: 'Custom web application platform',
    imageSrc: 'https://api.microlink.io/?url=https://jajr.xandree.com/&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark',
    tech: [],
    year: '2024',
    highlights: ['Custom web platform', 'Scalable architecture', 'Modern UI/UX design'],
    url: 'https://jajr.xandree.com/',
  },
  {
    id: 3,
    name: 'ProcureSys',
    type: 'web',
    description: 'Procurement management system for streamlined purchasing workflows',
    imageSrc: 'https://api.microlink.io/?url=https://procurement.xandree.com/&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark',
    tech: [],
    year: '2024',
    highlights: ['Procurement automation', 'Purchase workflow management', 'Inventory tracking'],
    url: 'https://procurement.xandree.com/',
  },
  {
    id: 4,
    name: 'Portfolio V1',
    type: 'web',
    description: 'My first portfolio website showcasing projects and skills',
    imageSrc: 'https://api.microlink.io/?url=https://prince.xandree.com/&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark',
    tech: [],
    year: '2023',
    highlights: ['Project showcase', 'Skills presentation', 'Professional branding'],
    url: 'https://prince.xandree.com/',
  },
]
