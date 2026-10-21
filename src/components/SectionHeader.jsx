import { motion } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function SectionHeader({ tag, title, highlight, sub }) {
  return (
    <motion.div
      className="section-head"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="section-tag">{tag}</div>
      <h2 className="section-title">
        {title} <span>{highlight}</span>
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </motion.div>
  )
}
