
// AgeCalculator.js
import React, { useState } from 'react';

const AgeCalculator = ({ birthdate }) => {
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDateParts = birthdate.split('-');

    if (birthDateParts.length === 3) {
      const birthDate = new Date(`${birthDateParts[2]}-${birthDateParts[1]}-${birthDateParts[0]}`);
      const yearsDiff = today.getFullYear() - birthDate.getFullYear();

      // Check if birthday has occurred this year
      const hasBirthdayOccurred =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

      const finalAge = hasBirthdayOccurred ? yearsDiff : yearsDiff - 1;

      setAge(finalAge);
    } else {
      setAge(null);
    }
  };

  return (
    <div className="age-calculator-container">
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null ? (
        <p className="age-display">You are {age} years old</p>
      ) : (
        <p className="age-display">Please enter a valid date of birth</p>
      )}
    </div>
  );
};

export default AgeCalculator;





