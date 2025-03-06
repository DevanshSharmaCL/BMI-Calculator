import React, { useMemo, useState } from 'react';


const BMI_Calculator = () => {
  const [weight, setWeight] = useState(70); // Initial weight in kg
  const [height, setHeight] = useState(180); // Initial height in cm

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  // BMI Calculation with proper formula
  const bmi = useMemo(() => {
    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmiValue = weight / (heightInMeters * heightInMeters); // BMI Formula
    return bmiValue.toFixed(1); // Round to one decimal place
  }, [weight, height]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="inputSelection">
        <p className="slide-output">Weight: {weight} KG</p>
        <input
          type="range"
          step="1"
          min="30"
          max="300"
          value={weight}
          onChange={onWeightChange}
        />
        <p className="slider-output">Height: {height} CM</p>
        <input
          type="range"
          min="140"
          max="220"
          value={height}
          onChange={onHeightChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is:</p>
        <p className="output">{bmi}</p>
      </div>
    </main>
  );
};

export default BMI_Calculator;
