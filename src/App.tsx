import React from 'react';
import TextField from './components/TextField';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <TextField 
        text="Hello! TypeScript and React"
        person={{ firstName: "Jeon", lastName: "MinJae" }} 
      />
    </div>
  );
}

export default App;
