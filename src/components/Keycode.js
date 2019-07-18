import React, { useState, useEffect } from 'react';

const Keycode = () => {
  const [keyCode, setKeyCode] = useState('');
  const [key, setKey] = useState('');
  const getKeycode = (e) => {
    console.log(e);
    setKeyCode(e.keyCode);
    setKey(e.key);
  }
  useEffect(() => {
    document.addEventListener('keyup', getKeycode);
    return () => document.removeEventListener('keyup');
  }, []);
  return (
    <>
      <input type="text" />
      {
        key.length === 0 ? (
          <div>press any keyboard key</div>
        ) :(
          <div>Key is "{key}"</div>
        )
      }
      <div className="key-code">{keyCode}</div>
    </>
  );
}
 
export default Keycode;