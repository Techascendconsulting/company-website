import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import TalentDevelopment from './components/TalentDevelopment'
import WorkExperience from './components/WorkExperience'
import SuccessStories from './components/SuccessStories'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <TalentDevelopment />
        <WorkExperience />
        <SuccessStories />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
