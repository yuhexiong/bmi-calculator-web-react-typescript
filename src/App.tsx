import React from 'react';
import './App.css';
import BmiCalculator from './BmiCalculator'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="app-title">
        <span style={{ fontSize: '25px' }}>bmi 計算機</span>
      </div>
      <BmiCalculator />
    </div>
  );
}

export default App;
