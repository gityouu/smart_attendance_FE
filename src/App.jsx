import React from 'react';
import { Login } from './login/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return(
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
  )
}

export default App;