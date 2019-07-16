import React from 'react';
import LevelA from './components/LevelA';
import MailContextProvider from './contexts/MailContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MailContextProvider>
          <LevelA />
        </MailContextProvider>
      </header>
    </div>
  );
}

export default App;
