import "./app.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <Outlet />

      {/* <Landing
        props={{
          middleContent: "landingPage",
          bottomTipContent: `< click my avatar to view more >`,
        }}
      /> */}

      {/* <SkillsPage
        props={{
          preHeadingContent: "I KNOW",
          headingContent: "FRONT END DEVELOPMENT",
          lSContent: feSkillsLS,
          middleContent: "fePage",
          rSContent: feSkillsRS,
          bottomTipContent: `< click my avatar to view more >`,
        }}
      /> */}
      {/* <SkillsPage
        props={{
          preHeadingContent: "I KNOW",
          headingContent: "BACK END DEVELOPMENT",
          lSContent: beSkillsLS,
          middleContent: "bePage",
          rSContent: beSkillsRS,
          bottomTipContent: `< click my avatar to view more >`,
        }}
      /> */}
      {/* <SkillsPage
        props={{
          preHeadingContent: "I LOVE",
          headingContent: "TEAMS & COLLABORATION",
          lSContent: pmSkillsLS,
          middleContent: "pmPage",
          rSContent: pmSkillsRS,
          bottomTipContent: `< click my avatar to view more >`,
        }}
      /> */}
      {/* <SkillsPage
        props={{
          preHeadingContent: "I HAVE",
          headingContent: "PACKAGED & DEPLOYED",
          lSContent: deploySkillsLS,
          middleContent: "deployPage",
          rSContent: deploySkillsRS,
          bottomTipContent: `< click my avatar to view more >`,
        }}
      /> */}
    </main>
  );
}

export default App;
