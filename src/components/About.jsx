import { motion } from 'framer-motion'
import { FaMicrochip, FaGear } from 'react-icons/fa6'
import { about, profile } from '../data/portfolio'
import SectionHeader, { fadeUp } from './SectionHeader'
import { Icon } from './Icons'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          tag="01 // ABOUT ME"
          title="About"
          highlight="Me"
          sub="A short story about who I am and what keeps me excited every day."
        />

        <div className="about-grid">
          {/* LEFT: photo + interests */}
          <div>
            <motion.div
              className="hud-card terminal"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="terminal-bar">
                <i />
                <i />
                <i />
                <span>~/profile/visca.jpg</span>
              </div>
              <div className="profile-photo">
                <img src={profile.photo} alt={`Portrait of ${profile.fullName}`} />
              </div>
            </motion.div>

            <div className="interest-grid">
              {about.interests.map((it, i) => (
                <motion.div
                  key={it.title}
                  className="hud-card interest"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{ y: -6 }}
                >
                  <motion.span
                    className="interest-icon"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Icon name={it.icon} />
                  </motion.span>
                  <h4>{it.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: story + tech stack */}
          <div>
            <motion.div
              className="about-text"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {about.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </motion.div>

            <motion.div
              className="hud-card skills"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>
                <FaGear className="neon" /> TECH STACK
              </h3>
              <p className="stack-note">{about.stackNote}</p>
              <div className="tech-stack">
                {about.stack.map((t, i) => (
                  <motion.span
                    key={t}
                    className="tech-chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <FaMicrochip size={12} /> {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
