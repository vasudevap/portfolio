import { Link } from "react-router-dom";
import "./skill.css";
import githubLogo from "../assets/images/githubLogo.png";

function Skill({ content }) {
  console.log(content.text);
  function handleLSContainerClick(e) {
    console.log(e.target);
  }
  return (
    <div className="skill" onClick={handleLSContainerClick}>
      {content.text}
    </div>
  );
}
export default Skill;
