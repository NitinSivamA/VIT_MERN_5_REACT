// App.js
import React, { useState } from 'react';
import DatePicker from './DatePicker';
import AgeCalculator from './AgeCalculator';
import './App.css';

const App = () => {
  const [birthdate, setBirthdate] = useState(null);

  return (
    <div className="app-container">
      <h1 className="app-heading">Age Calculator</h1>
      <p className="app-subheading">Enter your date of birth:</p>
      <DatePicker onDateSelect={setBirthdate} />
      {birthdate && (
        <>
          <AgeCalculator birthdate={birthdate} />
          <p className="birthdate-display">{birthdate}</p>
        </>
      )}
    </div>
  );
};

export default App;

