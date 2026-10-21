import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaMicrochip } from 'react-icons/fa6'
import { profile } from '../data/portfolio'
import { fadeUp } from './SectionHeader'

export default function Contact() {
  return (
    <>
      <section id="contact" className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <motion.div
            className="hud-card contact-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="cert-glow" style={{ width: 400, height: 400, top: -200, right: -100 }} />
            <div className="section-tag">05 // CONNECT</div>
            <h2>
              Punya ide robot atau drone? <span className="neon">Ayo bangun bersama.</span>
            </h2>
            <p>Saya terbuka untuk kolaborasi, freelance project, maupun sekadar diskusi seputar embedded system dan UAV.</p>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="btn btn-primary" id="contact-email">
                <FaEnvelope /> {profile.email}
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost" id="contact-linkedin">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>
            <FaMicrochip className="neon" style={{ verticalAlign: '-2px' }} /> © {new Date().getFullYear()} {profile.fullName}
          </span>
          <span>
            Built with React · <span className="neon">while(alive) {'{'} build(); {'}'}</span>
          </span>
        </div>
      </footer>
    </>
  )
}
