import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home/App.tsx'
import './index.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from './pages/quiz/quiz.tsx'
import { quizData } from './pages/quiz/data.ts'
import Result from './pages/result/result.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/quiz" element={<Quiz quiz={quizData} />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
