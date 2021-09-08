import React, { useState, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "react-three-fiber";

const Moon = () => {
  function Moon() {
    const moonTexture = useTexture("../textures/moon.jpg");
    const [active, setActive] = useState(0);
    const moonRotationSpeed = Math.log10(3683);
    const { spring } = useSpring({
      spring: active,
      config: {
        mass: 50,
        tension: 200,
        friction: 50,
        precision: 0.0001,
        duration: 5000,
      },
    });
    // const positionZ = spring.to(
    //   [0, 0.25, 0.5, 0.75, 1],
    //   [1.5, 5.5, 2.5, -5, 1]
    // );
    // const positionX = spring.to(
    //   [-10, 0.25, 0.5, 0.75, 1],
    //   [3.5, 0, -5.5, -1, 3.5]
    // );
    // const positionY = spring.to([0, 0.25, 0.5, 0.75, 1], [2, 0.5, 1.5, 2.5, 2]);
    // in case i want to rotate z-axis with react spring
    // i use useFrame hook to make a realistic comparison between the different
    // planet speeds ''+= speed ''. If i wanted to use react-spring i should
    // translate the speed of each planet to the duration of the animation.
    // const { rotationalSpring } = useSpring({
    //   to: { rotationalSpring: 1 },
    //   from: { rotationalSpring: 0 },
    //   loop: true,
    //   config: {
    //     mass: 50,
    //     tension: 200,
    //     friction: 50,
    //     precision: 0.0001,
    //     duration: 80000,
    //   },
    // });
    // const { rotateZ } = useSpring({
    //   rotateZ: rotationalSpring.to([0, 1], [0, 360]),
    // });
    const mesh = useRef();
    useFrame(
      () =>
        (mesh.current.rotation.y = mesh.current.rotation.y +=
          moonRotationSpeed / 100)
    );
    return (
      <animated.mesh
        position={[-10, 4, -5]}
        ref={mesh}
        // position-x={positionX}
        // position-y={positionY}
        // position-z={positionZ}
        onClick={() => setActive(Number(!active))}
      >
        <sphereGeometry attach="geometry" args={[2, 20, 20]} />
        <animated.meshStandardMaterial attach="material" map={moonTexture} />
      </animated.mesh>
    );
  }

  return <Moon />;
};

export default Moon;
