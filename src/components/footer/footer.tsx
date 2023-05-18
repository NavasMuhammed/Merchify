import { useState, useRef } from 'react';
import { Divider } from "@chakra-ui/react";
import "./footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faIdBadge, faQuestionCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faAward, faExclamation } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);
    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };
    const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === modalRef.current) {
            setIsOpen(false);
        }
    };
    return (
        <>
            {!isOpen && <Divider></Divider>}
            <div onClick={handleBackgroundClick} ref={modalRef} className={`footer-container ${isOpen ? 'open' : ''}`}>
                {isOpen &&
                    <div className='footer-modal-content'>
                        <span>Quiz Rules</span>
                        <div>
                            <FontAwesomeIcon icon={faClock} />
                            <div>
                                <span>10 Mins</span>
                                <span>Keep in mind that it&apos;s a time-bond quiz.</span>
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faQuestionCircle} />
                            <div>
                                <span>5 Mins</span>
                                <span>We believe that you will ace it</span>
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faAward} />
                            <div>
                                <span>50% Passing Criteria</span>
                                <span>All the best! See you on the other side.</span>
                            </div>
                        </div>
                        <div className="quiz-warning">
                            <FontAwesomeIcon id='warning' icon={faExclamation} />
                            <span>
                                This quiz can only be completed once daily.
                            </span>
                        </div>
                    </div>
                }
                {isOpen ?
                    <button onClick={handleButtonClick}>Start</button> :
                    <button onClick={handleButtonClick}>Take Quiz</button>

                }
            </div>
        </>
    );
};

export default Footer;
