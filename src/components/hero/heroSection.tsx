import "./hero.scss";
const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-title">
                <div>
                    <span id="violet">The</span>
                    <span id="green">Daily</span>
                    <span id="violet">MS</span>
                </div>
                <div>
                    <span id="green">Excel</span>
                    <span id="violet">Quiz</span>
                </div>
            </div>
            <div className="hero-image">
                <img src="/assets/images/hero image.png" alt="" />
            </div>
        </div>
    );
};

export default HeroSection;
