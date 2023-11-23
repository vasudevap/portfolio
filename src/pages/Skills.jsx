import PreHeading from "../components/PreHeading";
import Heading from "../components/Heading";
import ContactBtn from "../components/ContactBtn";
import Avatar from "../components/Avatar";
import Skill from "../components/Skill";

import "./skills.css";

function Skills({ props }) {
  return (
    <div className="pageContainer">
      <PreHeading content={{ text: props.preHeadingContent }} />
      <Heading content={{ text: props.headingContent }} />
      <div className="contentContainer">
        <div className="contentContainerLeft">
          {props.lSContent.map((skill) => (
            <Skill content={{ text: skill }} />
          ))}
        </div>
        <div className="contentContainerMiddle">
          <Avatar
            props={{ pageClass: props.middleContent, linkTo: props.nextLink }}
          />
          <ContactBtn />
        </div>
        <div className="contentContainerRight">
          {props.rSContent.map((skill) => (
            <Skill content={{ text: skill }} />
          ))}
        </div>
      </div>
      <div className="tipContainer">{props.bottomTipContent}</div>
    </div>
  );
}

export default Skills;
