import PreHeading from "./PreHeading";
import Heading from "./Heading";

import "./landing.css";

function Landing() {
  return (
    <div className="landingContainer">
      <PreHeading content={{ text: "I KNOW" }} />
      <Heading content={{ text: "FRONT END DEVELOPMENT" }} />
      <div className="contentContainer">
        <div>this is left side</div>
        <div className="contentContainerMiddle"></div>
        <div>this is right side</div>
      </div>
      <div className="tipContainer">
        {`< select a competency or scroll to view more >`}
      </div>
    </div>
  );
}

export default Landing;
