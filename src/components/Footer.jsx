import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        
          <div><Link to="/terms">Όροι Χρήσης</Link></div>
          <div><Link to="/privacy-policy">Πολιτική Προστασίας Προσωπικών Δεδομένων</Link></div>
          <Link to="/cookie-policy">Πολιτική Cookies</Link>
        
      </div>
      <div className="footer-right">
        <p>Επιικοινωνία</p>
        <p>📍 Διεύθυνση: Οδός Ενέργειας 12, Αθήνα</p>
        <p>📧 Email: support@energyconsult.gr</p>
        <p>📞 Τηλέφωνο: +30 210 1234567</p>
      </div>
    </footer>
  );
}