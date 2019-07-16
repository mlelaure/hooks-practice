import React, { useContext } from 'react';
import { MailContext } from './../contexts/MailContext';

const LevelC = () => {
  const messages = useContext(MailContext);
  const messageSingularOrPlural = messages.length > 1 ? 'messages' : 'message';
  return (
    <div className="level-c">
      <h1>Level C</h1>
      <div>
        Level A directly passed me {messages.length} {messageSingularOrPlural}.
        <hr/>
        {
          messages.length > 0 ? (
            <ul>
              { messages.map(msg => <li key={msg.id}>{msg.title}</li>)}
            </ul>
          ) : (
            <h3>no message</h3>
          )
        }
      </div>
    </div>
  );
}
 
export default LevelC;