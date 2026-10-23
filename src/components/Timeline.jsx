import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCalendarDays } from 'react-icons/fa6'

/** Shared timeline used by both the Education and Career sections. */
export default function Timeline({ items, defaultIcon = 'briefcase' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })

  return (
    <div className="timeline" ref={ref}>
      <div className="timeline-line">
        <motion.div className="timeline-progress" style={{ scaleY: scrollYProgress }} />
      </div>

      {items.map((c, i) => {
        const left = i % 2 === 0
        const Icon = c.icon === 'education' || defaultIcon === 'education' ? FaGraduationCap : FaBriefcase
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
                <Icon className="neon" />
                {c.company}
                {c.location && <> · <span style={{ color: 'var(--muted)' }}>{c.location}</span></>}
              </div>
              {(Array.isArray(c.desc) ? c.desc : [c.desc]).map((d, di) => (
                <p className="tl-desc" key={di}>
                  {d}
                </p>
              ))}
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
  )
}
