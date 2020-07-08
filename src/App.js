import React from 'react';
import Jumper from './components/Jumper'
import './App.css';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Jumper</h1>
        <Jumper />
      </div>
    </RecoilRoot>
  );
}

export default App;
