import { motion, useScroll, useSpring } from 'framer-motion'
import CircuitBackground from './components/CircuitBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Career from './components/Career'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <CircuitBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Career />
        <Certificates />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
