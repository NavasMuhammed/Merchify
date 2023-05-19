import TopBar from "../../components/topBar/topBar";
import "./result.scss";



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
