import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { KeyboardControls, Loader } from '@react-three/drei';
import { useConvaiClient } from './hooks/useConvaiClient';
import ChatBubble from './components/chat/Chat';
import './App.css'


function App() {
  /**
   * Add apikey and character id here
   */
  const { client } = useConvaiClient('64b61020-a9c4-11ef-8212-42010a7be016', '73d50f3ee65d8986cfc0d36bf1bc84ee');
  return (

    <div>
    
    
     <div className='parent'>
        
        <h2 className='title_app'>IinterHub AI Interview Simulator</h2>
     </div>

    <div className='container'>
        <div className='simulator'>
        <>
          <KeyboardControls
            map={[
              { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
              { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
              { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
              { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
              { name: 'sprint', keys: ['Shift'] },
              { name: 'jump', keys: ['Space'] },
            ]}
          >
            <Loader />
            {/* <Leva /> */}
            <Canvas
              shadows
              camera={{
                position: [0, 0.8, 3],
                fov: 75,
              }}
            >
              <Experience client={client} />
            </Canvas>
          </KeyboardControls>
          {/* {
          client && */}
         
          <ChatBubble  client={client}  />
          
          
          {/* } */}
        </>
        </div>
      </div>
    </div>
  );
}

export default App;
