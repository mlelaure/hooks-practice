import React, { useState, useEffect, useRef } from 'react';

const Pot = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [amount, setAmount] = useState('');
  const [users, setUsers] = useState([]);
  const firstNameRef = useRef();
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  const handleFirstName = e => {
    setFirstName(e.currentTarget.value)
  };
  const handleLastName = e => {
    setLastName(e.currentTarget.value)
  };
  const handleAmount = e => {
    setAmount(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      firstName,
      lastName,
      amount: Number(amount)
    }
    setUsers([newUser, ...users]);
    setFirstName('');
    setLastName('');
    setAmount(0.0);
    firstNameRef.current.focus();
  };
  return (
    <>
      <h2>Pot</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={firstName} 
          onChange={handleFirstName} 
          placeholder="first name" 
          ref={firstNameRef} 
        /><br />
        <input 
          type="text"
          value={lastName}
          onChange={handleLastName} 
          placeholder="last name" 
        /><br />
        <input 
          type="text" 
          value={amount} 
          onChange={handleAmount}
          placeholder="amount" 
        /><br /> 
        <button type="submit">add</button><br />
      </form>
      <hr/>
      {
        users.length > 0 ? (
          users.map(usr => <div key={usr.id}>{usr.firstName} added {usr.amount}</div>)
        ) : (
          <h3>nobody added money yet</h3>
        )
      }
    </>
  );
}
 
export default Pot;
