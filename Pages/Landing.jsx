import Heading from "../src/components/Heading";

import "./landing.css";

function Landing() {
  return (
    <div className="landingContainer">
      <div className="inlineTextContainer">
        <div className="inlineText">Hi!</div>
        <div className="inlineTextDecorated inlineTextDecoratedBg">Welcome</div>
        <div className="inlineText">to my site.</div>
      </div>
      <div className="inlineTextContainer">
        <div className="inlineText">Hi!</div>
        <Heading content={{ text: "PRASHANT" }} />
      </div>

      <div className="contentContainer">
        <div>this is left side</div>
        <div className="contentContainerAvatar"></div>
        <div>this is right side</div>
      </div>
      <div className="tipContainer">
        {`< select a competency or scroll to view more >`}
      </div>
    </div>
  );
}

export default Landing;
