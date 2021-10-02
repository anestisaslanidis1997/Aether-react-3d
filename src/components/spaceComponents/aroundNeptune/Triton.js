import React from "react";

import Moon from "../Moon";

const Triton = () => {
  return (
    <Moon
      positionInCanvasX={[-10, -4, 5, 8, -10]}
      positionInCanvasY={[4, 1, 1, 2, 4]}
      positionInCanvasZ={[-5, 4.5, 4, 0, -5]}
      texture={"../textures/moon.jpg"}
      name={"Triton"}
      orbitalSpeed={Math.log10(4.39)}
      rotationalSpeed={Math.log10(9650)}
      radius={1353.4}
      canvasRadius={2}
      fraction={18.22}
      distanceFromPlanet={354800}
    />
  );
};

export default Triton;
