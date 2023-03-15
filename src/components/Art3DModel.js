import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function Model(props) {
  const { scene } = useGLTF(`${props.modelURL}`);
  return <primitive object={scene} {...props} />
}

function Art3DModel(props) {
  return(
    <LazyLoadComponent>
      <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }}>
        {/* <color attach="background" args={["#00FFFFFF"]} /> */}
        <PresentationControls speed={1} global>
          <Stage environment={null}>
            <Model scale={0.01} modelURL={props.modelURL} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </LazyLoadComponent>
  )
}

export default Art3DModel;