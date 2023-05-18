import { useState, useEffect } from 'react';
import './quiz.scss';

interface Option {
    label: string;
    value: string;
}

interface Question {
    question: string;
    options: Option[];
    answer: string;
}

interface QuizData {
    quiz: Question[];
}

interface QuizComponentProps {
    quiz: QuizData;
}

function Quiz({ quiz }: QuizComponentProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [timer, setTimer] = useState(60);
    const [isRunning, setIsRunning] = useState(true);
    useEffect(() => {
        let interval: number;

        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        if (timer === 0) {
            setIsRunning(false);
            setQuizCompleted(true)
        }

        return () => clearInterval(interval);
    }, [isRunning, timer]);

    const handleOptionSelection = (optionValue: string) => {
        setSelectedOption(optionValue);
    };

    const handleNextQuestion = () => {
        const currentQuestion = quiz.quiz[currentQuestionIndex];

        if (selectedOption === currentQuestion.answer[0]) {
            setCorrectAnswers(prevCorrectAnswers => prevCorrectAnswers + 1);
        }

        setSelectedOption('');

        if (currentQuestionIndex === quiz.quiz.length - 1) {
            setQuizCompleted(true);
        } else {
            setCurrentQuestionIndex(prevCurrentQuestionIndex => prevCurrentQuestionIndex + 1);
        }
    };

    const currentQuestion = quiz.quiz[currentQuestionIndex];
    const isAnswerCorrect = selectedOption === (currentQuestion && currentQuestion.answer[0]);
    const isOptionSelected = selectedOption !== '';
    const minutes = Math.floor(timer / 60).toString().padStart(2, '0');
    const seconds = (timer % 60).toString().padStart(2, '0');

    return (
        <div className="quiz-container">
            {!quizCompleted && (<div className="counter-container">
                <span>0{currentQuestionIndex + 1} / 05</span>
                <span>{`${minutes}:${seconds}`}</span>
            </div>)}
            <div className="question-container">
                {!quizCompleted ? (
                    <>
                        <div className="question-wrapper" >
                            <span>{currentQuestion && currentQuestion.question}</span>
                        </div>
                        <div className="option-wrapper">
                            <ul className="options-container">
                                {currentQuestion &&
                                    currentQuestion.options.map((option, optionIndex) => (
                                        <li
                                            key={optionIndex}
                                            onClick={() => handleOptionSelection(option.value)}
                                            className={
                                                selectedOption === option.value
                                                    ? isAnswerCorrect
                                                        ? 'option correct'
                                                        : 'option incorrect'
                                                    : 'option'
                                            }
                                        >
                                            <label className="option-item">
                                                <div style={{ display: 'inline' }}>
                                                    <span className="box">{option.value}</span>
                                                    <label>{option.label}</label>
                                                </div>
                                                <input type="radio" name="option" checked={selectedOption === option.value} />
                                            </label>
                                        </li>
                                    ))}
                            </ul>
                            <div className='footer-container'>
                                <button onClick={handleNextQuestion} disabled={!isOptionSelected}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="complete">
                            <p>Quiz completed! Correct answers: {correctAnswers}</p>
                        </div>
                        <div className='footer-container'>
                            <button onClick={handleNextQuestion} >
                                Check Result
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}


export default Quiz;