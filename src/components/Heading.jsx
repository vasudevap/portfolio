import "./heading.css";

function Heading({ content }) {
  console.log(content.text);
  return <div className={"headingContainer"}>{content.text}</div>;
}
export default Heading;
