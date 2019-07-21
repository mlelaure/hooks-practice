import React from 'react';
import { useTextLimiter } from './useTextLimiter';

const Text = () => {
  const [isValid, onTextChange] = useTextLimiter();
  return (
    <>
      <input type="text" placeholder="enter your username" onChange={onTextChange} />
      {
        (!isValid) && <div className="input-size-error">please enter a text between 3 and 20 caracters</div>
      }
    </>
  );
}
 
export default Text;
