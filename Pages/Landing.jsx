import Heading from "../src/components/Heading";
import Avatar from "../src/components/Avatar";

import "./landing.css";

function Landing({ props }) {
  function handleContactMe(e) {
    console.log(e.target);
  }

  return (
    <div className="landingContainer">
      <div className="inlineTextContainer">
        <div>Hi!</div>
        <div className="inlineTextDecorated ">Welcome</div>
        <div>to my site.</div>
      </div>
      {/* <div className="avatar"></div> */}
      <Avatar props={{ pageClass: props.middleContent }} />
      <button className="contactMeBtn" onClick={handleContactMe}>
        Contact Me
      </button>
      <div className="contentContainer">
        <div className="contentContainerBottom">
          <div className="inlineText">I am</div>
          <Heading content={{ text: "PRASHANT" }} />
          <div>a full stack </div>
          <div className="inlineTextDecorated ">web app developer.</div>
        </div>
        <div></div>
      </div>
      <div className="tipContainer">{`< scroll to view more >`}</div>
    </div>
  );
}

export default Landing;
