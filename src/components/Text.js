import React, { useState, useEffect } from 'react';
import { useTextLimiter } from './useTextLimiter';
import { useDebounce } from './useDebounce';

const Text = () => {
  const [isValid, onTextChange] = useTextLimiter();
  const [username, setUsername] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [repos, setRepos] = useState([]);
  const debouncedUsername = useDebounce(username, 700);

  useEffect(
    () => {
      if(debouncedUsername && isValid) {
        setIsSearching(true);
        searchReposByUsername(debouncedUsername)
          .then(res => {
            setIsSearching(false);          
            setRepos(res);
          });
      } else {
        setRepos([]);
      }
    },
    [debouncedUsername, isValid]
  );

  const handleChange = e => {
    setUsername(e.target.value);
    onTextChange(e);
  }

  const searchReposByUsername = () => {
    return fetch(`https://api.github.com/users/${username}/repos`)
            .then(res => res.json());
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
      {
        isSearching  && <div>searching...</div>
      }
      {
        (!isSearching) && <ul>{ repos.map(r => <li key={r.id}>{r.name}</li>) }</ul>
      }
    </>
  );
}
 
export default Text;
