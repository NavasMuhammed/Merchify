import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./topBar.scss"

const TopBar = () => {
    return (
        <div className="tb-container">
            <div>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div>
                <FontAwesomeIcon icon={faSearch} />
                <img src="/assets/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default TopBar;