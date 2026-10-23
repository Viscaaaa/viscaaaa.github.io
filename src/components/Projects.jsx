import { useEffect, useRef, useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { FaGithub, FaArrowUpRightFromSquare, FaXmark, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa6'
import { projects, projectCategories } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import { Icon } from './Icons'

const catIcon = { Mobile: 'mobile', IoT: 'wifi' }

/** Animated "blueprint" cover used when a project has no image */
function Blueprint({ icon, title }) {
  return (
    <div className="blueprint" role="img" aria-label={`Illustration of ${title}`}>
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
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null) // { docs, index, title }
  const [open, setOpen] = useState(false) // manual fade control (AnimatePresence exit broken in framer-motion v14)
  const closeTimer = useRef(null)
  const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  const step = (dir) =>
    setLightbox((l) =>
      l ? { ...l, index: (l.index + dir + l.docs.length) % l.docs.length } : l,
    )

  const close = () => {
    if (closeTimer.current) return
    setOpen(false)
    closeTimer.current = setTimeout(() => {
      setLightbox(null)
      closeTimer.current = null
    }, 280) // match fade-out duration below
  }

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  // clear any pending close timer on unmount
  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const openDocs = (p) => {
    if (!p.docs?.length) return
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setLightbox({ docs: p.docs, index: 0, title: p.title })
    setOpen(true)
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          tag="04 // PROJECTS"
          title="Project"
          highlight="Portfolio"
          sub="A collection of things I've built — mobile apps, microcontroller boards, and IoT devices from scratch to working products."
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
            {list.map((p) => (
              <motion.article
                layout
                key={p.title}
                className={`hud-card project ${p.docs?.length ? 'clickable' : ''}`}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8 }}
                  onClick={() => openDocs(p)}
                  role={p.docs?.length ? 'button' : undefined}
                  tabIndex={p.docs?.length ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (p.docs?.length && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault()
                      openDocs(p)
                    }
                  }}
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
                      {p.docs?.length ? (
                        <button
                          type="button"
                          className="doc-btn"
                          onClick={(e) => {
                            e.stopPropagation()
                            openDocs(p)
                          }}
                        >
                          <FaImages size={12} /> View Documentation
                        </button>
                      ) : (
                        <>
                          <a href={p.github} target="_blank" rel="noreferrer">
                            <FaGithub /> Source
                          </a>
                          <a href={p.demo} target="_blank" rel="noreferrer">
                            <FaArrowUpRightFromSquare size={12} />{' '}
                            {p.demoLabel || 'Demo'}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
          </motion.div>
        </LayoutGroup>

        {lightbox && (
          <motion.div
            className="lightbox-overlay"
            initial={false}
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={close}
          >
              <button className="lightbox-close" onClick={close} aria-label="Close documentation">
                <FaXmark />
              </button>

              <button
                className="lightbox-nav prev"
                onClick={(e) => {
                  e.stopPropagation()
                  step(-1)
                }}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>

              <motion.figure
                className="lightbox-figure"
                initial={false}
                animate={{ scale: open ? 1 : 0.94, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="lightbox-title">
                  <FaImages className="neon" /> {lightbox.title}
                </div>
                <img
                  key={lightbox.index}
                  src={lightbox.docs[lightbox.index]}
                  alt={`${lightbox.title} — documentation ${lightbox.index + 1}`}
                />
                <figcaption>
                  Documentation {lightbox.index + 1} / {lightbox.docs.length}
                </figcaption>
              </motion.figure>

              <button
                className="lightbox-nav next"
                onClick={(e) => {
                  e.stopPropagation()
                  step(1)
                }}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>

              <div className="lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
                {lightbox.docs.map((d, i) => (
                  <button
                    key={d}
                    className={i === lightbox.index ? 'active' : ''}
                    onClick={() => setLightbox((l) => ({ ...l, index: i }))}
                    aria-label={`Go to image ${i + 1}`}
                  >
                    <img src={d} alt="" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
      </div>
    </section>
  )
}
