import React, { useState} from 'react';
import { useTextLimiter } from './useTextLimiter';
import { useDebounce } from './useDebounce';

const Text = () => {
  const [isValid, onTextChange] = useTextLimiter();
  const [username, setUsername] = useState('');
  const debouncedUsername = useDebounce(username, 700);

  const handleChange = e => {
    setUsername(e.target.value);
    onTextChange(e);
  }
  return (
    <>
      <input type="text" placeholder="enter your username" onChange={handleChange} /> 
      {
        (!isValid) && <div className="input-size-error">please enter a text between 3 and 20 caracters</div>
      }
      {
        debouncedUsername && <div>{debouncedUsername}</div>
      }
    </>
  );
}
 
export default Text;
