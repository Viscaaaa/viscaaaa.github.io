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
          title="Tentang"
          highlight="Saya"
          sub="Sedikit cerita tentang siapa saya dan apa yang membuat saya bersemangat setiap hari."
        />

        <div className="about-grid">
          {/* LEFT: terminal profile + text */}
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
                <span>~/profile/main.cpp</span>
              </div>
              <div className="terminal-body">
                <div><span className="p">#include</span> <span className="s">&lt;passion.h&gt;</span></div>
                <div className="c">// Engineer profile</div>
                <div><span className="k">struct</span> Engineer {'{'}</div>
                <div>&nbsp;&nbsp;name = <span className="s">"{profile.fullName}"</span>;</div>
                <div>&nbsp;&nbsp;location = <span className="s">"{profile.location}"</span>;</div>
                <div>&nbsp;&nbsp;loves = [<span className="s">"Robot"</span>, <span className="s">"MCU"</span>, <span className="s">"Drone"</span>];</div>
                <div>&nbsp;&nbsp;coffee_level = <span className="s">0xFF</span>;</div>
                <div>{'};'}</div>
                <div>&nbsp;</div>
                <div><span className="k">void</span> loop() {'{'}</div>
                <div>&nbsp;&nbsp;learn(); build(); fly(); <span className="c">// repeat</span></div>
                <div>{'}'}</div>
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
                    animate={{ rotate: it.icon === 'drone' ? [0, 6, -6, 0] : 0, y: [0, -4, 0] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Icon name={it.icon} />
                  </motion.span>
                  <h4>{it.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: story + skills */}
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
                <FaGear className="neon" /> CORE SKILLS
              </h3>
              {about.skills.map((s, i) => (
                <div className="skill" key={s.name}>
                  <div className="skill-head">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>

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
          </div>
        </div>
      </div>
    </section>
  )
}
