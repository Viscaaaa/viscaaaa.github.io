import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCalendarDays } from 'react-icons/fa6'
import { career } from '../data/portfolio'
import SectionHeader from './SectionHeader'

export default function Career() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })

  return (
    <section id="career" className="section">
      <div className="container">
        <SectionHeader
          tag="02 // CAREER LOG"
          title="Progres"
          highlight="Karir"
          sub="Jejak perjalanan saya — dari ruang praktikum robotika hingga membangun sistem di industri."
        />

        <div className="timeline" ref={ref}>
          <div className="timeline-line">
            <motion.div className="timeline-progress" style={{ scaleY: scrollYProgress }} />
          </div>

          {career.map((c, i) => {
            const left = i % 2 === 0
            return (
              <motion.div
                key={c.role + c.period}
                className={`tl-item ${left ? 'tl-left' : 'tl-right'}`}
                initial={{ opacity: 0, x: left ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="tl-node" />
                <div className="hud-card tl-card">
                  <div className="tl-period">
                    <FaCalendarDays /> {c.period}
                  </div>
                  <h3 className="tl-role">{c.role}</h3>
                  <div className="tl-company">
                    {c.education ? <FaGraduationCap className="neon" /> : <FaBriefcase className="neon" />}
                    {c.company} · <span style={{ color: 'var(--muted)' }}>{c.location}</span>
                  </div>
                  <p className="tl-desc">{c.desc}</p>
                  <div className="tl-tags">
                    {c.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
