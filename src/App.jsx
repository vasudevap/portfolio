import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

import "./app.css";

// const override = {};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
      "./assets/",
      "./assets/images/emailLogo.png",
      "./assets/images/githubLogo.png",
      "./assets/images/linkedinLogo.svg",
      "./assets/images/PV_be.png",
      "./assets/images/PV_contact.png",
      "./assets/images/PV_deploy.png",
      "./assets/images/PV_fe.png",
      "./assets/images/PV_hi.png",
      "./assets/images/PV_pm.png",
    ];

    cacheImages(imgs);
  }, []);

  const cacheImages = async (imgPaths) => {
    const promises = await imgPaths.map((imgPath) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = imgPath;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false);
  };

  return (
    <main>
      {isLoading ? (
        <PacmanLoader
          color="#8A5428"
          loading={isLoading}
          size={50}
          // cssOverride={override}
          speedMultiplier={1}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Outlet />
      )}
    </main>
  );
}

export default App;
