import { education } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import Timeline from './Timeline'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeader
          tag="02 // EDUCATION"
          title="Education &"
          highlight="Organizations"
          sub="Where I built my foundation — Politeknik Negeri Bali (Software Engineering), a national mobile development program, and my campus robotics organization."
        />

        <Timeline items={education} defaultIcon="education" />
      </div>
    </section>
  )
}
