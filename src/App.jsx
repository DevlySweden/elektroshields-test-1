import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import site from './content/site'
import projects from './content/projects'

function App() {
  useEffect(() => {
    document.title = site.company.name
  }, [])

  return (
    <div className="page" style={{ '--accent': site.branding.accentColor }}>
      <Header site={site} projects={projects} contactSection={site.contactSection} />
      <main>
        <Hero site={site} />
        <Projects projects={projects} />
        <Contact site={site} />
      </main>
      <Footer site={site} />
    </div>
  )
}

export default App
