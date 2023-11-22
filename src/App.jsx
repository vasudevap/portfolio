import "./app.css";

import Landing from "../Pages/Landing";
import SkillsPage from "../Pages/SkillsPage";

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
      {/* <Landing props={{ middleContent: "landingPage" }} /> */}
      {/* <SkillsPage
        props={{
          preHeadingContent: "I KNOW",
          headingContent: "FRONT END DEVELOPMENT",
          lSContent: feSkillsLS,
          middleContent: "fePage",
          rSContent: feSkillsRS,
          bottomTipContent: `< select a competency or scroll to view more >`,
        }}
      /> */}
      {/* <SkillsPage
        props={{
          preHeadingContent: "I KNOW",
          headingContent: "BACK END DEVELOPMENT",
          lSContent: beSkillsLS,
          middleContent: "bePage",
          rSContent: beSkillsRS,
          bottomTipContent: `< select a competency or scroll to view more >`,
        }}
      /> */}
      {/* <SkillsPage
        props={{
          preHeadingContent: "I LOVE",
          headingContent: "TEAMS & COLLABORATION",
          lSContent: pmSkillsLS,
          middleContent: "pmPage",
          rSContent: pmSkillsRS,
          bottomTipContent: `< select a competency or scroll to view more >`,
        }}
      /> */}
      <SkillsPage
        props={{
          preHeadingContent: "I HAVE",
          headingContent: "PACKAGED & DEPLOYED",
          lSContent: deploySkillsLS,
          middleContent: "deployPage",
          rSContent: deploySkillsRS,
          bottomTipContent: `< select a competency or scroll to view more >`,
        }}
      />
    </main>
  );
}

export default App;
