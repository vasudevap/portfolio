import "./skill.css";

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
