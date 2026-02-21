import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProblemAnimated } from './components/Problem'
import { CourseOverview } from './components/CourseOverview'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { CourseCurriculum } from './components/CourseModules'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemAnimated />
      <CourseOverview />
      <CourseCurriculum />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

export default App