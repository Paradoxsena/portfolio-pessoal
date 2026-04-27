import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Hackathon from './components/Hackathon'
import Problems from './components/Problems'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Hackathon />
        <Problems />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

