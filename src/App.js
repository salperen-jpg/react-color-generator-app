import React, { useState } from 'react';
import './App.css';
import Values from 'values.js';
import Colors from './Colors';

function App() {
  const [color, setColor] = useState('');
  const [error, SetError] = useState(false);
  const [colorList, setColorList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setColorList(colors);
      console.log(colors);
      SetError(false);
    } catch (error) {
      SetError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className='title'>
        <h1>Color Generator</h1>
        <div className='underline'></div>
      </div>
      <div className='form-container'>
        <form className='my-form' onSubmit={submitHandler}>
          <label htmlFor='color'>Color : </label>
          <input
            type='text'
            value={color}
            className={`${error ? 'error' : 'null'}`}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button type='submit'>Generate</button>
        </form>
      </div>
      <div className='colors-container'>
        {colorList.map((singleColor, index) => {
          return (
            <Colors
              {...singleColor}
              key={index}
              hexColor={singleColor.hex}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
