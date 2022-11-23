import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css'

function App() {
  const [board, setBoard] = useState(["","","","","","","","","",]);

  return (
    <div className="App">
      <div className="board">

      </div>
    </div>
  )
}

export default App
