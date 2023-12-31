/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("./assets/room.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.411, 0]} scale={4}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Floor}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sofa.geometry}
        material={materials.Sofa}
        position={[-0.058, 0.611, 2.418]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[3.158, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials.Metal}
          scale={[0.317, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.Sofa}
          position={[-0.437, 0.669, 0.173]}
          scale={[0.443, 1.062, 0.811]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.Sofa}
          position={[0.441, 0.669, 0.173]}
          scale={[0.443, 1.062, 0.811]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.Sofa}
          position={[0.611, 1.726, -0.626]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.307, 1, 0.478]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.Sofa}
          position={[-0.002, 1.726, -0.626]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.307, 1, 0.478]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials.Sofa}
          position={[-0.613, 1.726, -0.626]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.307, 1, 0.478]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.Sofa}
          position={[0.611, 1.726, -0.626]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.307, 1, 0.478]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials.Sofa}
          position={[0.899, 1.264, 0.351]}
          rotation={[-1.583, 1.54, 1.608]}
          scale={[0.605, 0.623, 0.094]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials.Sofa}
          position={[-0.899, 1.264, 0.351]}
          rotation={[1.583, 1.54, -1.608]}
          scale={[0.605, 0.623, 0.094]}
        />
      </mesh>
      <group
        position={[-0.28, 3.631, -3.878]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.967, 1.124, 1.124]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_1.geometry}
          material={materials.TV}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_2.geometry}
          material={materials.TVDisplay}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_3.geometry}
          material={materials.TVBacklight}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tv_Cabinet.geometry}
        material={materials.Cabinet}
        position={[0.028, 0.411, -3.357]}
        scale={[1, 1.079, 1.083]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials.Cabinet}
          position={[-0.026, 0, -0.002]}
        />
      </mesh>
      <group
        position={[2.123, 1.236, -3.005]}
        rotation={[Math.PI, -0.873, Math.PI]}
        scale={[0.189, 0.177, 0.236]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_1.geometry}
          material={materials.BookCover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_2.geometry}
          material={materials.BookPaper}
        />
      </group>
      <group
        position={[2.745, 0.841, -2.987]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.189, 0.189, 0.236]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_3.geometry}
          material={materials.BookCover2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_4.geometry}
          material={materials.BookPaper}
        />
      </group>
      <group
        position={[-1.84, 0.662, -3.132]}
        rotation={[0, -1.047, 0]}
        scale={[0.189, 0.189, 0.236]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_5.geometry}
          material={materials.BookCover4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_6.geometry}
          material={materials.BookPaper}
        />
      </group>
      <group position={[-1.831, 0.604, -2.987]} scale={[0.189, 0.085, 0.236]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_1.geometry}
          material={materials.BookCover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_2.geometry}
          material={materials.BookPaper}
        />
      </group>
      <group
        position={[-1.378, 0.685, -3.117]}
        rotation={[0.976, 1.138, -0.926]}
        scale={[0.187, 0.115, 0.226]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_3.geometry}
          material={materials.BookCover2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_4.geometry}
          material={materials.BookPaper}
        />
      </group>
      <group
        position={[2.398, 0.824, -2.987]}
        rotation={[Math.PI / 2, 0, 1.396]}
        scale={[0.189, 0.145, 0.219]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_1.geometry}
          material={materials.BookCover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_2.geometry}
          material={materials.BookPaper}
        />
      </group>
      <group
        position={[2.571, 0.83, -2.987]}
        rotation={[Math.PI / 2, -0.262, Math.PI / 2]}
        scale={[0.189, 0.122, 0.236]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_7.geometry}
          material={materials.BookCover3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_8.geometry}
          material={materials.BookPaper}
        />
      </group>
      <group
        position={[2.072, 0.605, -3.053]}
        rotation={[0, -1.152, 0]}
        scale={[0.172, 0.076, 0.185]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_5.geometry}
          material={materials.BookCover4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_6.geometry}
          material={materials.BookPaper}
        />
      </group>
      <group
        position={[-1.619, 1.902, 1.89]}
        rotation={[0.059, -1.152, 0.045]}
        scale={[0.172, 0.076, 0.185]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_1.geometry}
          material={materials.BookCover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_2.geometry}
          material={materials.BookPaper}
        />
      </group>
      <group
        position={[-0.754, 1.401, -0.453]}
        rotation={[Math.PI / 2, 0, 2.443]}
        scale={0.065}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Mug Inner"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials["Mug Outer"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.water.geometry}
          material={materials.Water}
          position={[0.153, -0.964, -0.036]}
          rotation={[Math.PI / 2, 0.698, Math.PI]}
          scale={15.302}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dvd_Player.geometry}
        material={materials["DVD Player"]}
        position={[-0.063, 0.575, -3.27]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.075, 0.064, 0.086]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arch35_050_001.geometry}
          material={materials["Soundbar Foam"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arch35_051_001.geometry}
          material={materials.pesdvdpeq}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arch35_052_001.geometry}
          material={materials.logodvd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arch35_053_001.geometry}
          material={materials["DVD Player"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arch35_054_001.geometry}
          material={materials["DVD Player"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arch35_056_001.geometry}
          material={materials.pesdvdpeq}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arch35_057_001.geometry}
          material={materials["DVD Player"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arch35_058_001.geometry}
          material={materials.pesdvdpeq}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Guitar.geometry}
        material={materials.Guitar}
        position={[-3.786, 1.824, -3.628]}
        rotation={[2.866, -0.884, -1.712]}
        scale={0.07}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Indoor_Plant.geometry}
        material={materials.gorshok}
        position={[3.423, 0.411, -3.361]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dirt.geometry}
          material={materials.sand}
          position={[-93.204, 0.044, 46.982]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dirt02.geometry}
          material={materials.sand}
          position={[0, 354.445, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf000.geometry}
          material={materials["leaf.001"]}
          position={[15.854, 1016.605, 288.257]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf008.geometry}
          material={materials["leaf.001"]}
          position={[192.185, 619.194, 48.51]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf009.geometry}
          material={materials["leaf.001"]}
          position={[-208.453, 596.194, -44.549]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf010.geometry}
          material={materials["leaf.001"]}
          position={[-91.632, 511.383, 95.451]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf011.geometry}
          material={materials["leaf.001"]}
          position={[-29.973, 649.38, -231.326]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf006000.geometry}
          material={materials["leaf.001"]}
          position={[15.196, 1038.559, -352.576]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf007.geometry}
          material={materials["leaf.001"]}
          position={[347.832, 736.289, -262.987]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaf02000.geometry}
          material={materials["leaf.001"]}
          position={[-34.449, 1280.297, 2.758]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaf03000.geometry}
          material={materials["leaf.001"]}
          position={[367.883, 1072.772, -54.787]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaf05000.geometry}
          material={materials["leaf.001"]}
          position={[-351.01, 870.815, 251.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lef04000.geometry}
          material={materials["leaf.001"]}
          position={[-462.612, 934.73, -232.387]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Moh.geometry}
          material={materials.moh}
          position={[-6.768, -65.677, 2.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stem.geometry}
          material={materials.stem}
          position={[-9.674, 271.904, -13.492]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Phone.geometry}
        material={materials["Phone Cover"]}
        position={[0.277, 1.287, -0.158]}
        rotation={[0, -0.175, Math.PI]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap1.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap1_1.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap1_2.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap1_3.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap1_4.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap1_5.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap1_6.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap2.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap2_1.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap2_2.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap2_3.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap2_4.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap2_5.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap2_6.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Capsule.geometry}
          material={materials["Phone Cover"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Capsule1.geometry}
          material={materials["Phone Cover"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube1.geometry}
          material={materials["Phone Display"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude.geometry}
          material={materials.Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude1.geometry}
          material={materials.Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude2.geometry}
          material={materials["Mat.6"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_2.geometry}
          material={materials["Phone Cover"]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Remote.geometry}
        material={materials.Remote}
        position={[0.817, 1.22, -3.339]}
        rotation={[0, Math.PI / 9, 0]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Soundbar.geometry}
        material={materials["Soundbar Cover"]}
        position={[-0.589, 1.719, -3.863]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.095, 2.868, 0.161]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Soundbar Cover"]}
          position={[0.146, 0.024, 0]}
          scale={[0.955, 0.914, 0.955]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials["Soundbar Foam"]}
          position={[0.558, -0.901, 0.308]}
          scale={[10.57, 0.266, 6.22]}
        />
        <group
          position={[1.476, -0.553, 0.04]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0, 0.007, 0.01]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ID10001.geometry}
            material={materials["Soundbar Speaker"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ID10001_1.geometry}
            material={materials["Soundbar Speaker 2"]}
          />
        </group>
        <group
          position={[1.476, 0.129, -0.232]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={[0, 0.007, 0.01]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ID10001.geometry}
            material={materials["Soundbar Speaker"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ID10001_1.geometry}
            material={materials["Soundbar Speaker 2"]}
          />
        </group>
        <group
          position={[1.466, 0.103, 0.033]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0, 0.005, 0.007]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ID10.geometry}
            material={materials["Soundbar Speaker"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ID10_1.geometry}
            material={materials["Soundbar Speaker 2"]}
          />
        </group>
        <group
          position={[1.466, -0.433, 0.033]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0, 0.005, 0.007]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ID10.geometry}
            material={materials["Soundbar Speaker"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ID10_1.geometry}
            material={materials["Soundbar Speaker 2"]}
          />
        </group>
        <group
          position={[1.476, -0.688, 0.04]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0, 0.007, 0.01]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ID10001.geometry}
            material={materials["Soundbar Speaker"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ID10001_1.geometry}
            material={materials["Soundbar Speaker 2"]}
          />
        </group>
        <group
          position={[1.476, 0.387, 0.04]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0, 0.007, 0.01]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ID10001.geometry}
            material={materials["Soundbar Speaker"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ID10001_1.geometry}
            material={materials["Soundbar Speaker 2"]}
          />
        </group>
      </mesh>
      <group
        position={[0.073, 0.411, -1.08]}
        rotation={[Math.PI / 2, 0, 0.611]}
        scale={2.437}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Center_Table.geometry}
          material={materials["Tea Table "]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Center_Table_1.geometry}
          material={materials["Table Drawer"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Center_Table_2.geometry}
          material={materials["Drawer Holder"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Frame.geometry}
        material={materials["Wall Frame"]}
        position={[-4, 3.468, -0.763]}
        rotation={[1.571, 0, -Math.PI / 2]}
        scale={[3.063, 3.533, 3.533]}
      />
      <group
        position={[-0.091, 1.397, -0.37]}
        rotation={[-0.258, 0.254, 0.066]}
        scale={0.502}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_1.geometry}
          material={materials.joystick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_2.geometry}
          material={materials.JoystickLights}
        />
      </group>
      <group
        position={[-0.682, 0.543, -0.399]}
        rotation={[-2.884, 0.254, 3.076]}
        scale={0.502}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_1.geometry}
          material={materials.joystick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_2.geometry}
          material={materials.JoystickLights}
        />
      </group>
      <group position={[-0.051, 1.29, -3.343]} scale={0.375}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.PS4Top}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.PS4Font}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PS4_Base.geometry}
          material={materials.PS4Bottom}
          position={[0, -0.113, 0.042]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/room.gltf");
