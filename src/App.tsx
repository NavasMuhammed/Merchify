import './App.scss'
import HeroSection from './components/hero/heroSection'
import QuizInfo from './components/quizInfo/quizInfo'
import TopBar from './components/topBar/topBar'
import Divider from './components/widgets/divider'

function App() {
  return (
    <>
      <TopBar />
      <Divider />
      <HeroSection />
      <QuizInfo />
    </>
  )
}

export default App
