import { Link } from "react-router-dom";
import "./contactBtn.css";

function ContactBtn() {
  return (
    <button className="contactBtn">
      <Link className="linkStyle" to="/Contact">
        Contact Me
      </Link>
    </button>
  );
}
export default ContactBtn;
