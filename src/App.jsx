import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "sonner";
import { ThemeProvider } from "./context/theme.tsx";
import Homepage from "./content/homepage";
import SolutionsPage from "./content/solutionsPage";
import SessionCreation from "./content/sessionCreation";
import StudentCheckIn from "./content/studentCheckIn";
import PricingPage from "./content/pricingPage";
import ResourcesPage from "./content/resourcePage.tsx";
import NotFoundPage from "./components/404.tsx";

function App() {
  return(
      <>
          <Toaster position={"top-center"} richColors closeButton duration={10000} />
          <ThemeProvider>
              <Router>
                  <Routes>
                      <Route path="*" element={<NotFoundPage />} />
                      <Route path="/" element={<Homepage />} />
                      <Route path="/solutions" element={<SolutionsPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/resources" element={<ResourcesPage />} />
                      <Route path="/session-creation" element={<SessionCreation />} />
                      <Route path="/student-check-in/:sessionId" element={<StudentCheckIn />} />
                  </Routes>
              </Router>
          </ThemeProvider>
      </>
  )
}

export default App;

