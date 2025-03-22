import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

// Custom function to generate random points in a sphere
const generateRandomPointsInSphere = (count, radius) => {
  const points = new Float32Array(count * 3); // Each point has x, y, z (3 values)
  for (let i = 0; i < count; i++) {
    let x, y, z, length;
    do {
      // Generate random x, y, z between -1 and 1
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
      length = Math.sqrt(x * x + y * y + z * z); // Calculate distance from origin
    } while (length > 1); // Ensure the point is inside the unit sphere

    // Scale the point to the desired radius
    points[i * 3] = x * radius;
    points[i * 3 + 1] = y * radius;
    points[i * 3 + 2] = z * radius;
  }
  return points;
};

const Stars = (props) => {
  const ref = useRef();

  // Generate random points in a sphere
  const [sphere] = useState(() => generateRandomPointsInSphere(700, 2));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, Math.PI / 4, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f672c2"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [1, 1, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;