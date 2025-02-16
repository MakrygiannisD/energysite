import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlansPage.css';

export default function PlansPage() {
  const navigate = useNavigate();

  const handleNavigation = (plan) => {
    navigate(`/plan-selection/${plan}`);
  };

  return (
    <div className="plans-page">
      <h1>Επιλέξτε το Πρόγραμμά σας</h1>
      
      <div className="plans-container">
        {/* Basic Plan Section */}
        <section className="plan-section basic-plan">
          <h2>Βασικό Πακέτο - 0€/μήνα</h2>
          <p>
            Απλή ενημέρωση κάθε μήνα για τα πιο φτηνά προγράμματα ρεύματος, email notifications
            και εύκολη αλλαγή παρόχου.
          </p>
          <button className="plan-button" onClick={() => handleNavigation('Basic')}>
            Επιλέξτε Βασικό Πακέτο
          </button>
        </section>

        {/* Premium Plan Section */}
        <section className="plan-section premium-plan">
          <h2>Premium Πακέτο - 5.99€/μήνα</h2>
          <p>
            Ολοκληρωμένη διαχείριση του ρεύματος, κάνουμε εμείς τις καλύτερες επιλογές,
            αλλαγή παρόχου εξ ολοκλήρου από εμάς.
          </p>
          <button className="plan-button" onClick={() => handleNavigation('Premium')}>
            Επιλέξτε Premium Πακέτο
          </button>
        </section>
      </div>
    </div>
  );
}