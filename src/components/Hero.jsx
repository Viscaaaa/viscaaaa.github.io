import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaDownload,
  FaMicrochip,
  FaMobileScreenButton,
} from 'react-icons/fa6'
import { profile } from '../data/portfolio'
import { fadeUp } from './SectionHeader'

const socialIcons = {
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
}

export default function Hero() {
  // subtle parallax tilt on the drone visual
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 15 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 15 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <motion.div className="status-pill" variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="status-dot" />
              SYSTEM ONLINE — Open for collaboration
            </motion.div>

            <motion.p className="hero-hello" variants={fadeUp} initial="hidden" animate="show" custom={1}>
              &gt; {profile.greeting}
            </motion.p>

            <motion.h1 className="hero-name" variants={fadeUp} initial="hidden" animate="show" custom={2}>
              <span className="glitch">{profile.fullName}</span>
            </motion.h1>

            <motion.div className="hero-role" variants={fadeUp} initial="hidden" animate="show" custom={3}>
              <span className="prompt">$</span>
              <TypeAnimation
                sequence={profile.roles}
                speed={45}
                deletionSpeed={65}
                repeat={Infinity}
                cursor={false}
                className="type-cursor"
              />
            </motion.div>

            <motion.p className="hero-desc" variants={fadeUp} initial="hidden" animate="show" custom={4}>
              {profile.tagline}
            </motion.p>

            <motion.div className="hero-cta" variants={fadeUp} initial="hidden" animate="show" custom={5}>
              <a href="#projects" className="btn btn-primary" id="hero-cta-projects">
                <FaPaperPlane /> View Projects
              </a>
              <a href={profile.cvUrl} className="btn btn-ghost" id="hero-cta-cv" download>
                <FaDownload /> Download CV
              </a>
            </motion.div>

            <motion.div className="hero-socials" variants={fadeUp} initial="hidden" animate="show" custom={6}>
              {Object.entries(profile.socials).map(([k, url]) => {
                const I = socialIcons[k]
                return (
                  <a key={k} href={url} target="_blank" rel="noreferrer" className="social-btn" aria-label={k} id={`hero-social-${k}`}>
                    <I />
                  </a>
                )
              })}
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            onMouseMove={onMove}
            onMouseLeave={() => {
              mx.set(0)
              my.set(0)
            }}
            style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
          >
            <div className="hero-ring" />
            <div className="hero-ring r2" />
            <div className="hero-ring r3" />
            <motion.div
              className="hero-img-wrap"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src={profile.heroImage} alt="Glowing green neon wireframe illustration of a drone with a microcontroller" />
            </motion.div>

            <motion.div className="hud-label l1" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}>
              <FaMicrochip />
              <div>
                <small>MICROCONTROLLER</small>ESP32 · Arduino Uno
              </div>
            </motion.div>
            <motion.div className="hud-label l2" animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
              <FaMobileScreenButton />
              <div>
                <small>MOBILE DEVELOPMENT</small>Flutter · Kotlin
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-mouse" />
        SCROLL
      </div>
    </section>
  )
}
