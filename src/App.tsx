import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { CosmicStory } from '@/components/sections/CosmicStory'
import { TechGalaxies } from '@/components/sections/TechGalaxies'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { GraphicWorks } from '@/components/sections/GraphicWorks'
import { CRMCluster } from '@/components/sections/CRMCluster'
import { AutomationNebula } from '@/components/sections/AutomationNebula'
import { Contact } from '@/components/sections/Contact'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { projects } from '@/data/projects'
import { graphicWorks } from '@/data/graphicWorks'
import { workflows } from '@/data/workflows'
import { ChatWidget } from '@/components/ChatWidget'

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
        <GraphicWorks works={graphicWorks} />
        <CRMCluster />
        <AutomationNebula workflows={workflows} />
        <Contact />
      </main>

      <ChatWidget />

      <Footer />
    </div>
  )
}

export default App
