import PreHeading from "../src/components/PreHeading";
import Heading from "../src/components/Heading";
import ContactBtn from "../src/components/ContactBtn";
import Avatar from "../src/components/Avatar";
import Skill from "../src/components/Skill";

import "./skillsPage.css";

function SkillsPage() {
  const LSFESkills = [
    "CSS",
    "HTML",
    "JAVASCRIPT ES6",
    "AXIOS",
    "BCRYPT",
    "JWT",
  ];
  const RSFESkills = [
    "BOOTSTRAP",
    "TAILWIND",
    "JQUERY",
    "REACT",
    "FRAMER MOTION",
  ];
  return (
    <div className="pageContainer">
      <PreHeading content={{ text: "I KNOW" }} />
      <Heading content={{ text: "FRONT END DEVELOPMENT" }} />
      <div className="contentContainer">
        <div className="contentContainerLeft">
          {LSFESkills.map((skill) => (
            <Skill content={{ text: skill }} />
          ))}
        </div>
        <div className="contentContainerMiddle">
          <Avatar />
          <ContactBtn />
        </div>
        <div className="contentContainerRight">
          {RSFESkills.map((skill) => (
            <Skill content={{ text: skill }} />
          ))}
        </div>
      </div>
      <div className="tipContainer">
        {`< select a competency or scroll to view more >`}
      </div>
    </div>
  );
}

export default SkillsPage;
