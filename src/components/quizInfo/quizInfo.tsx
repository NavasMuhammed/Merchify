import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBookmark, faUser } from "@fortawesome/free-regular-svg-icons";
import "./quizInfo.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Avatar, AvatarGroup } from '@chakra-ui/react'
import { useState } from "react";
const QuizInfo = () => {
    const rating = "5.0";
    const [showFullText, setShowFullText] = useState(false);
    const textContent = "The Microsoft Excel Proficiency Test assesses individuals' knowledge and skills in using the software. It encompasses various topics such as data analysis, formatting, formulas, functions, and more. The test aims to provide a comprehensive evaluation of one's Excel proficiency. By completing this test, individuals can gauge their Excel expertise and identify areas for improvement."
    const maxChars = 182;
    const truncatedText = textContent.slice(0, maxChars);
    const displayText = showFullText ? textContent : truncatedText;
    const containerStyle = {
        maxHeight: showFullText ? '300px' : '150px', // Adjust the height as needed
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-out',
    };

    return (
        <div className="quiz-info-container">
            <div className="main-title">
                <span>The Daily MS Excel Quiz</span>
            </div>
            <div className="main-content">
                <div className="main-content-left">
                    <div>
                        <FontAwesomeIcon icon={faComment} />
                        <span>Leave a Comment</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBookmark} />
                        <span>Save Quiz</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                        <span>Challenge a Friend</span>
                    </div>
                </div>
                <div className="main-content-right">
                    <div className="section">
                        <AvatarGroup size='sm' max={4} >
                            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </AvatarGroup>
                        <span>people enrolled</span>
                    </div>
                    <div className="section">
                        <div className="stars">
                            <FontAwesomeIcon id="faStar" icon={faStar} />
                            <FontAwesomeIcon id="faStar" icon={faStar} />
                            <FontAwesomeIcon id="faStar" icon={faStar} />
                            <FontAwesomeIcon id="faStar" icon={faStar} />
                            <FontAwesomeIcon id="faStar" icon={faStar} />
                        </div>
                        <span>3 Ratings ({rating})</span>
                    </div>
                </div>
            </div>
            <div className="description-content" style={containerStyle}>
                <span>
                    {displayText}{!showFullText && truncatedText.length < textContent.length && '...'}
                </span>
                <div>
                    {textContent.length > maxChars && (
                        <button onClick={() => setShowFullText(!showFullText)}>
                            {showFullText ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizInfo;