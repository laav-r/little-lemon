import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import styles from "./BackButton.module.css";

function BackButton() {
  return (
    <Link to="/">
      <button type="button" className={`${styles["back-btn"]} mt-4`}>
        <FontAwesomeIcon icon={faLeftLong} />
      </button>
    </Link>
  );
}

export default BackButton;
