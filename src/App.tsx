import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { CosmicStory } from '@/components/sections/CosmicStory'
import { TechGalaxies } from '@/components/sections/TechGalaxies'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { CRMCluster } from '@/components/sections/CRMCluster'
import { AutomationNebula } from '@/components/sections/AutomationNebula'
import { Contact } from '@/components/sections/Contact'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { projects } from '@/data/projects'
import { workflows } from '@/data/workflows'

function App() {
  useSectionReveal()

  return (
    <div className="min-h-screen bg-cosmic-deep text-white">
      <Header />

      <main>
        <Hero />
        <CosmicStory />
        <TechGalaxies />
        <ProjectsGrid projects={projects} />
        <CRMCluster />
        <AutomationNebula workflows={workflows} />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
