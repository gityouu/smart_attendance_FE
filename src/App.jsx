import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./context/theme.tsx";
import Homepage from "./content/homepage";
import SolutionsPage from "./content/solutionsPage";
import SessionCreation from "./content/sessionCreation";
import StudentCheckIn from "./content/studentCheckIn";
import PricingPage from "./content/pricingPage";
import ResourcesPage from "./content/resourcePage.tsx";

function App() {
  return(
      <ThemeProvider>
          <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/session-creation" element={<SessionCreation />} />
                <Route path="/student-check-in/:sessionId" element={<StudentCheckIn />} />
            </Routes>
          </Router>
      </ThemeProvider>
  )
}

export default App;
