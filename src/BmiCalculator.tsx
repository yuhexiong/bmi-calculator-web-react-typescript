import React, { useState } from 'react';
import './index.css';

const BmiCalculator = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBMI] = useState<string | null>(null);

  const calculateBMI = () => {
    if (!weight || !height) {
      alert('請提供身高與體重');
      return;
    }

    const weightNumber = parseFloat(weight);
    const heightNumber = parseFloat(height);

    if (isNaN(weightNumber) || isNaN(heightNumber)) {
      alert('請輸入有效的數字');
      return;
    }

    const bmiValue = (weightNumber / ((heightNumber / 100) * (heightNumber / 100))).toFixed(2);
    setBMI(bmiValue);
  };

  const clearData = () => {
    setWeight('');
    setHeight('');
    setBMI(null);
  };

  return (
    <div className="container">
      <div className="input-group">
        <label className="label">身高(cm):</label>
        <input className="input" type="text" value={height} onChange={e => setHeight(e.target.value)} />
      </div>
      <div className="input-group">
        <label className="label">體重(kg):</label>
        <input className="input" type="text" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <button className="button" onClick={calculateBMI}>計算bmi</button>
      <button className="button" onClick={clearData}>清除資料</button>
      {bmi && <p className="result">你的bmi是 {bmi}</p>}
    </div>
  );
};

export default BmiCalculator;
