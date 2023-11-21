import "./avatar.css";

function Avatar() {
  function handleAvatar(e) {
    console.log(e.target);
  }
  return <div className="avatar" onClick={handleAvatar}></div>;
}
export default Avatar;
