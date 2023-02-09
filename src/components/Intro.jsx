import React, { useState } from 'react';

import Input from './Input';
import Footer from './Footer';
import './Intro.css';

const Intro = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'firstname',
      type: 'text',
      placeholder: 'First Name',
      required: true,
      pattern: '^[A-Za-z]{3,16}$',
    },
    {
      id: 2,
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name',
      errorMessage: 'Last Name cannot be empty',
      required: true,
      pattern: '^[A-Za-z]{2,16}$',
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Looks like this is not an email',
      required: true,
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Password cannot be empty',
      required: true,
    },
  ];

  const handleChange = (e) => {
    setValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="intro">
      {/* Text Box */}
      <div className="text-box">
        <h2>Learn to code by watching others</h2>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      {/* Form */}
      <div className="form-box">
        <div className="free-message-box">
          <p>
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>
        <form>
          {inputs.map((item) => (
            <Input
              key={item.id}
              {...item}
              value={values[item.name]}
              onChange={handleChange}
            />
          ))}

          <button type="submit">Claim your free trial</button>
          <p className="terms-info">
            By clicking the button, you are agreeing to our{' '}
            <a href="#">Terms and Services</a>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Intro;
