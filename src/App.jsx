import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './GlobalStyles.css';
import LandingPage from './pages/LandingPage';
import PricesPage from './pages/PricesPage';
import PlansPage from './pages/PlansPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PlanSelectionForm from './pages/PlanSelectionForm';
import CookiePolicy from './pages/CookiePolicy';
import logo1 from './assets/logo1.png';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {/* Navbar with Centered Hamburger Menu */}
      <nav className="navbar">
      
      <div> <Link to="/" className="logo">
          <img src={logo1} alt="Energy Consult Logo" className="navbar-logo" />
          </Link>
           Energy consult 
      </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/prices" onClick={() => setMenuOpen(false)}>Prices</Link></li>
          <li><Link to="/plans" onClick={() => setMenuOpen(false)}>Plans</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>

      {/* Additional Styling for Mobile Display */}
      <style>
        {`
          .nav-links.show {
            position: fixed;
            top: 60px;
            left: 0;
            width: 100%;
            height: calc(100vh - 60px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #00796b;
            z-index: 999;
            padding: 20px 0;
            gap: 20px;
          }

          .nav-links.show a {
            font-size: 1.5rem;
            color: white;
            font-weight: bold;
          }
        `}
      </style>

      {/* Page Routes */}
      <div className="page-content-wrapper">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/plan-selection/:plan" element={<PlanSelectionForm />} />

        </Routes>
      </div>
      <Footer />

      <style>
        {`
          .navbar-logo {
            height: 24px;
            width: auto;
            max-height: 24px;
            object-fit: contain;
          }
          @media (max-width: 768px) {
            .navbar-logo {
              height: 20px;
            }
          }
        `}
      </style>

    </Router>
    
    
  );


}
