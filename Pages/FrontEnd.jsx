import PreHeading from "../src/components/PreHeading";
import Heading from "../src/components/Heading";
import ContactBtn from "../src/components/ContactBtn";
import Avatar from "../src/components/Avatar";

import "./frontEnd.css";

function FrontEnd() {
  return (
    <div className="pageContainer">
      <PreHeading content={{ text: "I KNOW" }} />
      <Heading content={{ text: "FRONT END DEVELOPMENT" }} />
      <div className="contentContainer">
        <div>this is left side</div>
        <div>
          <Avatar />
          <ContactBtn />
        </div>
        <div>this is right side</div>
      </div>
      <div className="tipContainer">
        {`< select a competency or scroll to view more >`}
      </div>
    </div>
  );
}

export default FrontEnd;
