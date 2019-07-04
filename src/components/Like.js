import React, { useState } from 'react';

const Like = () => {
  let [nbOfLikes, setNbOfLikes] = useState(0);
  return (
    <div>
      {nbOfLikes}
      <button onClick={() => setNbOfLikes(nbOfLikes + 2)}>like</button>
    </div>
  );
}
 
export default Like;