import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import BusinessInfoPage from "./pages/BusinessInfoPage";
import ConnectFacebookPage from "./pages/ConnectFacebookPage";
import DashboardPage from "./pages/DashboardPage";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/business-info" element={<BusinessInfoPage />} />
              <Route path="/connect-facebook" element={<ConnectFacebookPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
