import Heading from "../src/components/Heading";

import "./landing.css";

function Landing() {
  return (
    <div className="landingContainer">
      <div className="inlineTextContainer">
        <div>Hi!</div>
        <div className="inlineTextDecorated inlineTextDecoratedBg">Welcome</div>
        <div>to my site.</div>
      </div>
      <div className="contentContainerAvatar"></div>
      <div className="contentContainer">
        <div className="contentContainerLeft">
          <div>I am</div>
          <Heading content={{ text: "PRASHANT" }} />
        </div>
        <div></div>
      </div>
      <div className="tipContainer">
        {`< select a competency or scroll to view more >`}
      </div>
    </div>
  );
}

export default Landing;
