// 📂 Greek Landing Page for Energy Consultant Website
// Full Greek translation with navigation support.

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="hero-section">
        <h1 className="hero-title">Καλώς ήρθατε στην Energy Consult</h1>
        <p className="hero-subtitle">Σας βοηθάμε να κάνετε έξυπνες επιλογές ενέργειας</p>
        <div className="hero-buttons">
          <button 
            className="primary-button"
            onClick={() => navigate('/plans')}
          >
            Δείτε τα Προγράμματα
          </button>
          <button 
            className="secondary-button"
            onClick={() => navigate('/contact')}
          >
            Επικοινωνήστε Μαζί Μας
          </button>
        </div>
      </header>

      <section className="about-section common-text">
        <h2>Σχετικά με Εμάς</h2>
        <p>
          Βοηθάμε ιδιώτες και επιχειρήσεις να βρουν εξατομικευμένες ενεργειακές λύσεις, μειώνοντας το κόστος
          και επιλέγοντας τον κατάλληλο πάροχο. Οι υπηρεσίες μας απλοποιούν τις ενεργειακές αποφάσεις και μεγιστοποιούν την εξοικονόμηση.
        </p>
      </section>

      <section className="services-section common-text">
        <h2>Οι Υπηρεσίες Μας</h2>
        <ul>
          <li>⚡ Σύγκριση παρόχων και προγραμμάτων</li>
          <li>💡 Συμβουλές για μείωση κόστους ενέργειας</li>
          <li>📊 Διαχείριση λογαριασμών και συμβολαίων</li>
          <li>🌿 Συμβουλευτική για Ανανεώσιμες Πηγές Ενέργειας</li>
        </ul>
      </section>

    </div>
  );
}
