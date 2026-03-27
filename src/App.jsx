import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return(
      <NavigationProvider>
      <Router>
        <Routes>
        </Routes>
      </Router>
      </NavigationProvider>
  )
}

export default App;