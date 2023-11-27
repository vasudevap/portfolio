import PreHeading from "../components/PreHeading";
import Heading from "../components/Heading";
import Avatar from "../components/Avatar";
import githubLogo from "../assets/images/githubLogo.png";
import linkedinLogo from "../assets/images/linkedinLogo.svg";
import emailLogo from "../assets/images/emailLogo.png";

import "./contact.css";

function Contact() {
  return (
    <div className="pageContainer">
      <PreHeading content={{ text: "I WOULD LOVE TO" }} />
      <Heading content={{ text: "GET IN TOUCH" }} />
      <div className="contentContainer">
        <div className="contentContainerLeft">
          <a href="https://github.com/vasudevap">
            <img src={githubLogo} className="logoImg" alt="Github Logo" />
          </a>
          <a href="https://www.linkedin.com/in/prashant-vasudeva-16513713/">
            <img src={linkedinLogo} className="logoImg" alt="LinkedIn Logo" />
          </a>
          <a href="mailto:prashant.vasudeva@gmail.com">
            <img src={emailLogo} className="logoImg" alt="email" />
          </a>
        </div>
        <div className="contentContainerRight">
          <Avatar props={{ pageClass: "contactPage", linkTo: `/` }} />
        </div>
      </div>
      <div className="tipContainer">{`< Click my avatar to return to the beginning >`}</div>
    </div>
  );
}
export default Contact;
