import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Landing() {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax pages={5} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            ...alignCenter,
            background: "#253237",
            justifyContent: "center",
          }}
        >
          <div>Scroll to View My Work</div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{
            ...alignCenter,
            // background: "#805E73",
            justifyContent: "center",
          }}
        >
          <div>My Work:</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          speed={1}
          style={{
            ...alignCenter,
            background: "#253237",
            justifyContent: "center",
          }}
        >
          <div>Work 1</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.5}
          speed={1}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div>Work 2</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Landing;
