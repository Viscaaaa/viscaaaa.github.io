import { career } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import Timeline from './Timeline'

export default function Career() {
  return (
    <section id="career" className="section">
      <div className="container">
        <SectionHeader
          tag="03 // CAREER LOG"
          title="Industry"
          highlight="Experience"
          sub="My journey in the industry — from a software engineering internship to owning mobile and web systems full time."
        />

        <Timeline items={career} defaultIcon="briefcase" />
      </div>
    </section>
  )
}
