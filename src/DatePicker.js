// DatePicker.js
import React, { useState } from 'react';

const DatePicker = ({ onDateSelect }) => {
  const [dateInput, setDateInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDateChange = (e) => {
    setDateInput(e.target.value);
  };

  const handleSetDate = () => {
    const dateParts = dateInput.split('-');

    if (dateParts.length === 3) {
      const formattedDate = `${dateParts[0].padStart(2, '0')}-${dateParts[1].padStart(2, '0')}-${dateParts[2]}`;
      onDateSelect(formattedDate);
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter a valid date in the dd-mm-yyyy format');
    }
  };

  return (
    <div className="date-picker-container">
      <input type="text" placeholder="dd-mm-yyyy" value={dateInput} onChange={handleDateChange} />
      <button onClick={handleSetDate}>Choose Date</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default DatePicker;


