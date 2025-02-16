// 📂 PlanSelectionForm.jsx - Added Invoice Upload Field
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PlanSelectionForm.css';

export default function PlanSelectionForm() {
  const { plan } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    serviceType: '',
    selectedPlan: plan || '',
    invoice: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, invoice: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch('http://localhost:5000/api/customers', {
        method: 'POST',
        body: formDataToSend,
      });
      if (response.ok) {
        alert('Τα στοιχεία σας αποθηκεύτηκαν επιτυχώς! Ευχαριστούμε!');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          serviceType: '',
          selectedPlan: plan || '',
          invoice: null,
        });
      } else {
        alert('Αποτυχία αποθήκευσης. Παρακαλώ προσπαθήστε ξανά.');
      }
    } catch (error) {
      alert('Σφάλμα σύνδεσης με τον διακομιστή.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="plan-form-page">
      <h1 className="form-title">Συμπληρώστε τα στοιχεία σας ({formData.selectedPlan} Πρόγραμμα)</h1>
      <form className="plan-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <input name="firstName" placeholder="Όνομα" value={formData.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Επώνυμο" value={formData.lastName} onChange={handleChange} required />
        <input name="phone" type="tel" placeholder="Τηλέφωνο" value={formData.phone} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <select name="serviceType" value={formData.serviceType} onChange={handleChange} required>
          <option value="">Τύπος Παροχής</option>
          <option value="Οικιακή">Οικιακή</option>
          <option value="Επαγγελματική">Επαγγελματική</option>
        </select>
        <input type="file" name="invoice" accept=".pdf,.jpg,.png" onChange={handleFileChange} required />
        <button type="submit" className="submit-button">Υποβολή</button>
      </form>
    </div>
  );
}
