import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';


function App() {
  
  return (
      <div className="App">
        <Outlet/>
      </div>
  );
}

export default App;