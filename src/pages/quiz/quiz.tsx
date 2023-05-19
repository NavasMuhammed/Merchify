import { useState, useEffect } from 'react';
import './quiz.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';
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
    const [karma, setKarma] = useState(0);

    useEffect(() => {
        function generateRandomNumber(): number {
            const min = 30;
            const max = 50;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        setKarma(generateRandomNumber());
    }, []);

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
    const navigate = useNavigate();
    const handleResult = () => {
        navigate('/result');
    };
    return (
        <>
            <div className={quizCompleted ? "complete-container" : "quiz-container"}>
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
                            <div className='footer-container'>
                                <button onClick={handleResult} >
                                    Check Result
                                </button>
                            </div>
                        </>
                    )}
                </div>
                {quizCompleted && <>
                    <div className="result-info">
                        <img src="/assets/images/cat.png" alt="" />
                        <div>
                            <FontAwesomeIcon icon={faStar} />
                            <span>{correctAnswers + karma}</span>
                        </div>
                        <p>Karma Point earned!</p>
                    </div>
                    <div className="bottom-info">
                        <span>What are Karma Points?</span>
                        <p>Karma points are awarded for various actions like attempting quizzes and watching videos, allowing you to move up the leaderboards and unlock new features</p>
                    </div>
                </>
                }
            </div>
            {quizCompleted && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        </>
    );
}


export default Quiz;