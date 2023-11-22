import "./app.css";

import { Outlet } from "react-router-dom";

import Landing from "./pages/Landing";
import SkillsPage from "./pages/SkillsPage";

function App() {
  const feSkillsLS = [
    "CSS",
    "HTML",
    "JAVASCRIPT ES6",
    "AXIOS",
    "BCRYPT",
    "JWT",
  ];
  const feSkillsRS = [
    "BOOTSTRAP",
    "TAILWIND",
    "JQUERY",
    "REACT",
    "FRAMER MOTION",
  ];
  const beSkillsLS = ["MVC", "ORM", "NODE", "EXPRESS"];
  const beSkillsRS = ["MYSQL", "MONGODB", "GRAPHQL", "HANDLEBARS"];
  const pmSkillsLS = ["AGILE", "SCRUM", "KANBAN"];
  const pmSkillsRS = ["GITHUB", "KAISEN", "DOCUMENTATION"];

  const deploySkillsLS = ["HEROKU", "NETLIFY", "NPM", "MONGODB ATLAS"];
  const deploySkillsRS = ["GITHUB PAGES", "DOMAINS", "DNS"];

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
