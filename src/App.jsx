import { useState } from 'react';
import './App.css';
import Button from './Button';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };
  return (
    <>
      <Button handleClick={handleButtonClick} />
    </>
  );
}

export default App;
