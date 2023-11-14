import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Landing() {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax pages={5} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <p>Scroll to View My Work</p>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <p>My Work:</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <p>Work 1</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <p>Work 2</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Landing;
