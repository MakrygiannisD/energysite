// 📂 ContactPage.jsx - Improved Responsive Styling with White Text
import React from 'react';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Επικοινωνήστε Μαζί Μας</h1>
      <p>Είμαστε εδώ για να σας βοηθήσουμε! Συμπληρώστε τη φόρμα ή χρησιμοποιήστε τα στοιχεία επικοινωνίας μας.</p>

      <div className="contact-info">
        <p>📧 Email: support@energyconsult.gr</p>
        <p>📞 Τηλέφωνο: +30 210 1234567</p>
        <p>📍 Διεύθυνση: Οδός Ενέργειας 12, Αθήνα</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Το όνομά σας" required />
        <input type="email" placeholder="Το email σας" required />
        <textarea placeholder="Το μήνυμά σας" rows="5" required></textarea>
        <button type="submit">Αποστολή</button>
      </form>
    </div>
  );
}

