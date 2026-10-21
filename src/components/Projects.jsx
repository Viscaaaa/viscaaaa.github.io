import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { projects, projectCategories } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import { Icon } from './Icons'

const catIcon = { Robotics: 'robot', Drone: 'drone', IoT: 'wifi' }

/** Animated "blueprint" cover used when a project has no image */
function Blueprint({ icon, title }) {
  return (
    <div className="blueprint" role="img" aria-label={`Ilustrasi ${title}`}>
      <svg className="blueprint-svg" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="rgba(57,255,20,0.08)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="250" fill="url(#bp-grid)" />
        <g fill="none" stroke="rgba(57,255,20,0.35)" strokeWidth="1.5" className="bp-traces">
          <path d="M0 60 H90 L120 90 H160" />
          <path d="M0 190 H70 L100 160 H160" />
          <path d="M400 70 H310 L280 100 H240" />
          <path d="M400 180 H320 L290 150 H240" />
          <path d="M200 0 V50" />
          <path d="M200 250 V200" />
        </g>
        <g fill="#39ff14">
          <circle cx="160" cy="90" r="3" />
          <circle cx="160" cy="160" r="3" />
          <circle cx="240" cy="100" r="3" />
          <circle cx="240" cy="150" r="3" />
          <circle cx="200" cy="50" r="3" />
          <circle cx="200" cy="200" r="3" />
        </g>
        <circle cx="200" cy="125" r="70" fill="none" stroke="rgba(57,255,20,0.25)" strokeDasharray="4 6" className="bp-ring" />
        <circle cx="200" cy="125" r="55" fill="rgba(57,255,20,0.04)" stroke="rgba(57,255,20,0.4)" />
      </svg>
      <div className="blueprint-icon">
        <Icon name={icon} />
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('Semua')
  const list = filter === 'Semua' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          tag="04 // PROJECTS"
          title="Project"
          highlight="Portofolio"
          sub="Kumpulan karya yang saya bangun — robot, drone, dan perangkat IoT dari nol hingga berfungsi."
        />

        <LayoutGroup>
          <div className="filter-bar" role="tablist">
            {projectCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                id={`filter-${c.toLowerCase()}`}
                className={`filter-btn ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {filter === c && (
                  <motion.span layoutId="pill" className="pill-bg" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                )}
                <span>{c}</span>
              </button>
            ))}
          </div>

          <motion.div layout className="project-grid">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.article
                  layout
                  key={p.title}
                  className="hud-card project"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8 }}
                >
                  <div className="project-media">
                    <span className="project-cat">
                      <Icon name={catIcon[p.category]} /> {p.category}
                    </span>
                    <span className="project-scan" />
                    {p.image ? (
                      <img src={p.image} alt={p.title} loading="lazy" />
                    ) : (
                      <Blueprint icon={p.icon} title={p.title} />
                    )}
                  </div>
                  <div className="project-body">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <FaGithub /> Source
                      </a>
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <FaArrowUpRightFromSquare size={12} /> Demo
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}
