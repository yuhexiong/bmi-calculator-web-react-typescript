// src/App.tsx

import React from 'react';
import './App.css';
import BmiCalculator from './BmiCalculator'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <h3>bmi 計算機</h3>
      <BmiCalculator />
    </div>
  );
}

export default App;
