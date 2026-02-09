import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProblemAnimated } from './components/Problem'
import { CourseOverview } from './components/CourseOverview'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemAnimated />
      <CourseOverview />
    </main>
  )
}

export default App