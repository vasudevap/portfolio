import PreHeading from "../src/components/PreHeading";
import Heading from "../src/components/Heading";

import "./frontEnd.css";

function FrontEnd() {
  return (
    <div className="landingContainer">
      <PreHeading content={{ text: "I KNOW" }} />
      <Heading content={{ text: "FRONT END DEVELOPMENT" }} />
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

export default FrontEnd;
