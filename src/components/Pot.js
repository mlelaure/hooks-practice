import React, { useState, useEffect, useRef } from 'react';
// import {useLocalStorage} from 'react-use';
import useCustomLocalStorage from './useCustomLocalStorage';

const Pot = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [amount, setAmount] = useState('');
  const [users, setUsers] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [total, setTotal] = useState(0);
  const [usersInStorage, setUsersInStorage] = useCustomLocalStorage('users-bis');
  const firstNameRef = useRef();
  useEffect(() => {
    firstNameRef.current.focus();
    setUsers(JSON.parse(usersInStorage));
  }, [usersInStorage]);
  useEffect(() => {
    const total = users.reduce((acc, curr) => acc = acc + curr.amount, 0);
    setTotal(total);
    setUsersInStorage(JSON.stringify(users));
  }, [users, setUsersInStorage]);
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
  const toggleDetails = e => {
    setShowDetails(!showDetails);
  }
  const userSingularPlural = users.length > 1 ? 'users' : 'user';
  return (
    <>
      <h2>Pot</h2>
      <div>Total: {total} € ({users.length} {userSingularPlural})</div>
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
      <label><input type="checkbox" onChange={toggleDetails}/>show details</label>
      {
        users.length > 0 ? (
          users.map(usr => {
            if(showDetails) {
              return <div key={usr.id}>{usr.firstName} added {usr.amount} €</div>
            } else {
              return <div key={usr.id}>{usr.firstName} has participated</div>
            }
          })
        ) : (
          <h3>nobody added money yet</h3>
        )
      }
    </>
  );
}
 
export default Pot;
