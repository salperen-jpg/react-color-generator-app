import React, { useState, useEffect } from 'react';

const Colors = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bgColor = rgb.join(',');
  const hexString = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <div
      className={`single-color ${index > 10 && 'light-color'}`}
      style={{ backgroundColor: `rgb(${bgColor})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexString);
      }}
    >
      <p>{weight}%</p>
      <p>{hexString}</p>
      {alert && <p>Color copied</p>}
    </div>
  );
};

export default Colors;
