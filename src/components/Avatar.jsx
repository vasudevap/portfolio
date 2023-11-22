import { Link } from "react-router-dom";
import "./avatar.css";

function Avatar({ props }) {
  console.log(props);
  function handleAvatar(e) {
    console.log(e.target);
  }
  return (
    <Link to={props.linkTo}>
      <div className={`avatar ${props.pageClass}`}></div>
    </Link>
  );
}
export default Avatar;
