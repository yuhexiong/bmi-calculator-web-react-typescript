import React, { useState } from 'react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBMI] = useState<string | null>(null);

  const calculateBMI = () => {
    if (!weight || !height) {
      alert('請提供身高與體重');
      return;
    }

    const bmiValue = (weight / ((height/100) * (height/100))).toFixed(2);
    setBMI(bmiValue);
  };

  return (
    <div>
      <div>
        <label>體重(kg):</label>
        <input type="number" value={weight} onChange={e => setWeight(parseInt(e.target.value))} />
      </div>
      <div>
        <label>身高(cm):</label>
        <input type="number" value={height} onChange={e => setHeight(parseInt(e.target.value))} />
      </div>
      <button onClick={calculateBMI}>計算bmi</button>
      {bmi && <p>你的bmi是 {bmi}</p>}
    </div>
  );
};

export default BmiCalculator;