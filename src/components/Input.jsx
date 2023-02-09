import React, { useState } from 'react';

import errorIcon from '../assets/icon-error.svg';

const Input = (props) => {
  const {
    onChange,
    errorMessage,
    id,
    ...inputProps
  } = props;
  const [focusAndLeave, setFocusAndLeave] = useState(false);

  const handleBlur = (e) => {
    setFocusAndLeave(true);

    if(e.target.name === 'email' && !e.target.checkValidity()) {
      e.target.placeholder = 'email@example.com';
      e.target.value = '';
      e.target.classList.add('invalid')
    }
    console.log(e.target.classList)
  };

  return (
    <div className="form-input">
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleBlur}
        focused={focusAndLeave.toString()}
      />
      <img src={errorIcon} alt="error icon" className="error-icon" />
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

export default Input;
