import "./preHeading.css";

function PreHeading({ content }) {
  console.log(content.text);
  return <div className={"preHeadingContainer"}>{content.text}</div>;
}
export default PreHeading;
