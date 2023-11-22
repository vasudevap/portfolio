import "./main.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Skills from "./pages/SkillsPage.jsx";
import Landing from "./pages/Landing.jsx";

const feSkillsLS = ["CSS", "HTML", "JAVASCRIPT ES6", "AXIOS", "BCRYPT", "JWT"];
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Landing
            props={{
              middleContent: "landingPage",
              bottomTipContent: `< click my avatar to view more >`,
            }}
          />
        ),
      },
      {
        path: "/FrontEnd",
        element: (
          <Skills
            props={{
              preHeadingContent: "I KNOW",
              headingContent: "FRONT END DEVELOPMENT",
              lSContent: feSkillsLS,
              middleContent: "fePage",
              rSContent: feSkillsRS,
              bottomTipContent: `< click my avatar to view more >`,
            }}
          />
        ),
      },
      {
        path: "/BackEnd",
        element: (
          <Skills
            props={{
              preHeadingContent: "I KNOW",
              headingContent: "BACK END DEVELOPMENT",
              lSContent: beSkillsLS,
              middleContent: "bePage",
              rSContent: beSkillsRS,
              bottomTipContent: `< click my avatar to view more >`,
            }}
          />
        ),
      },
      {
        path: "/Collab",
        element: (
          <Skills
            props={{
              preHeadingContent: "I LOVE",
              headingContent: "TEAMS & COLLABORATION",
              lSContent: pmSkillsLS,
              middleContent: "pmPage",
              rSContent: pmSkillsRS,
              bottomTipContent: `< click my avatar to view more >`,
            }}
          />
        ),
      },
      {
        path: "/Deliver",
        element: (
          <Skills
            props={{
              preHeadingContent: "I HAVE",
              headingContent: "PACKAGED & DEPLOYED",
              lSContent: deploySkillsLS,
              middleContent: "deployPage",
              rSContent: deploySkillsRS,
              bottomTipContent: `< click my avatar to view more >`,
            }}
          />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
