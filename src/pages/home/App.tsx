import { Divider } from '@chakra-ui/react'
import './App.scss'
import Footer from '../../components/footer/footer'
import HeroSection from '../../components/hero/heroSection'
import QuizInfo from '../../components/quizInfo/quizInfo'
import TopBar from '../../components/topBar/topBar'


function App() {
  return (
    <>
      <TopBar />
      <Divider />
      <HeroSection />
      <QuizInfo />
      <Footer />
    </>
  )
}

export default App
