import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cubes from './components/Cubes';
import { FPV } from './components/FPV';
import { Ground } from './components/Ground';
import { Player } from './components/Player';

function App() {
  return (
    <>
      {/* <div>Outside Canvas</div> */}
      <Canvas>
        <Sky sunPosition={[100, 100, 30]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <Player />
          <Ground />
          <Cubes />
          <FPV />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
    </>
  );
}

export default App;
