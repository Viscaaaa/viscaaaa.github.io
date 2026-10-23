import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { certificates } from '../data/portfolio'
import SectionHeader, { fadeUp } from './SectionHeader'
import { Icon } from './Icons'

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <SectionHeader
          tag="03 // ACHIEVEMENTS"
          title="Certificates &"
          highlight="Achievements"
          sub="Competitions, programs, and certifications that mark my journey — from national robot competitions to campus awards and language tests."
        />

        <div className="cert-grid">
          {certificates.map((c, i) => (
            <motion.article
              key={c.title}
              className="hud-card cert"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={i % 3}
            >
              <div className="cert-glow" />
              <div className="cert-top">
                <motion.div className="cert-icon" whileHover={{ rotate: 12, scale: 1.1 }}>
                  <Icon name={c.icon} />
                </motion.div>
                <span className={`cert-type ${c.type === 'award' ? 'award' : ''}`}>
                  {c.type === 'award' ? '★ AWARD' : 'CERTIFIED'}
                </span>
              </div>
              <h3>{c.title}</h3>
              <p className="cert-issuer">{c.issuer}</p>
              {c.desc && <p className="cert-desc">{c.desc}</p>}
              <div className="cert-foot">
                <span>[{c.year}]</span>
                <a href={c.link} target="_blank" rel="noreferrer" id={`cert-link-${i}`}>
                  View <FaArrowUpRightFromSquare size={11} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
