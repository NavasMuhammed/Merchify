import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopBar from "../../components/topBar/topBar";
import "./result.scss";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";



const Result = () => {
    return (
        <>
            <TopBar />
            <div className='result-container'>
                <span className='result-title'>The Daily MS Excel Quiz</span>
                <div className="score-card">
                    <span>You Scored:</span>
                    <div className="percentage-wrapper">
                        <img src="/assets/images/pattern.png" alt="" />
                        <span>80%</span>
                        <img src="/assets/images/pattern.png" alt="" />
                    </div>
                    <span>Oh Snap, You can do better!</span>
                    <p>
                        Success is not final,failure is no fatal;It is the courage to continue that counts.
                    </p>
                </div>
                <div className="split-container">
                    <div className="score-container">
                        <span className="score1">Your score</span>
                        <span className="score2">2/5</span>
                        <span className="score3">Avg: 2 Marks</span>
                    </div>
                    <div className="score-container" id="right-score">
                        <span className="score1">time Taken</span>
                        <div><span className="score2">00:09<span>min</span></span></div>
                        <span className="score3">Avg: 00:30</span>
                    </div>
                </div>
                <div className="seekho-image">
                    <img src="/assets/images/seekho.png" alt="" />
                </div>
                <div className="share-container">
                    <FontAwesomeIcon icon={faShareAlt} />
                    <span >Share it with your friends</span>
                </div>
                <div className='footer-container'>
                    <button  >
                        Answers
                    </button>
                </div>
            </div>
        </>
    );
};

export default Result;
