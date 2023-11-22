import "./avatar.css";

function Avatar({ props }) {
  console.log(props);
  function handleAvatar(e) {
    console.log(e.target);
  }
  return (
    <div className={`avatar ${props.pageClass}`} onClick={handleAvatar}></div>
  );
}
export default Avatar;
