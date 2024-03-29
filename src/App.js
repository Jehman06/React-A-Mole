import { useState } from 'react';
import MoleContainer from './components/MoleContainer';

import './App.css';

function App() {
  let [score, setScore] = useState(0);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer
          key={i}
          setScore={setScore}
          score={score}
        />
      )
    }

    return (
      <div className='mole-hills'>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <p>{score}</p>
      {createMoleHill()}
    </div>
  );
}

export default App;
