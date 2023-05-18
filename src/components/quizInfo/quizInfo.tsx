import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBookmark, faUser } from "@fortawesome/free-regular-svg-icons";
import "./quizInfo.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Avatar, AvatarGroup } from '@chakra-ui/react'
const QuizInfo = () => {
    const rating = "5.0";
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
                        <AvatarGroup size='sm' max={4}>
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
        </div>
    );
};

export default QuizInfo;