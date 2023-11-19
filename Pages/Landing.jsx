import Heading from "../src/components/Heading";

import "./landing.css";

function Landing() {
  function handleContactMe(e) {
    console.log(e.target);
  }

  return (
    <div className="landingContainer">
      <div className="inlineTextContainer">
        <div>Hi!</div>
        <div className="inlineTextDecorated inlineTextDecoratedBg">Welcome</div>
        <div>to my site.</div>
      </div>
      <div className="avatar"></div>
      <button className="contactMeBtn" onClick={handleContactMe}>
        Contact Me
      </button>
      <div className="contentContainer">
        <div className="contentContainerBottom">
          <div>I am</div>
          <Heading content={{ text: "PRASHANT" }} />
          <div>a full stack web app developer.</div>
        </div>
        <div></div>
      </div>
      <div className="tipContainer">{`< scroll to view more >`}</div>
    </div>
  );
}

export default Landing;
