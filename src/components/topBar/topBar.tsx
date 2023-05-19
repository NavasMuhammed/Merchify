import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./topBar.scss"
import { useLocation, useNavigate } from "react-router-dom";

const TopBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className="tb-container">
            <div onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            {location.pathname != "/result" && <div>
                <FontAwesomeIcon icon={faSearch} />
                <img src="/assets/images/user.png" alt="" />
            </div>}
        </div>
    );
};

export default TopBar;