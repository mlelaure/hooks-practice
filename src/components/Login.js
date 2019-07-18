import React, { useState, useEffect, useRef } from 'react';

const Login = () => {
  const [login, setLogin] = useState('');
  const [message, setMessage] = useState('');
  const loginRef = useRef();
  useEffect(() => {
    console.log(loginRef);
    loginRef.current.focus();
  }, []);
  const handleChange = e => {
    setLogin(e.target.value);
  };
  const handleKeyUp = e => {
   if (e.keyCode === 13) {
     setMessage(`Trying to login ${login}`);
     setLogin('');
   } 
  }
  return (
    <>
      <input type="text" ref={loginRef} value={login} onChange={handleChange} onKeyUp={handleKeyUp} placeholder="your login" /><br/>
      {message}
    </>
  );
}
 
export default Login;