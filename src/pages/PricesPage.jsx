// 📂 Enhanced PricesPage.jsx - Sortable by Πάγιο (€/μήνα) and Τελική Τιμή (€/ΚWh)
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './PricesPage.css';

export default function PricesPage() {
  const [prices, setPrices] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [providerFilter, setProviderFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [contractFilter, setContractFilter] = useState('');

  useEffect(() => {
    fetch('/energy_prices.csv')
      .then(response => response.text())
      .then(csvData => {
        const result = Papa.parse(csvData, { header: true, skipEmptyLines: true });
        setPrices(result.data);
        setFilteredPrices(result.data);
      });
  }, []);

  // Apply filters
  useEffect(() => {
    const filtered = prices.filter(item =>
      (providerFilter ? item['Πάροχος']?.includes(providerFilter) : true) &&
      (yearFilter ? item['Έτος']?.toString() === yearFilter : true) &&
      (monthFilter ? item['Μήνας']?.toString() === monthFilter : true) &&
      (contractFilter ? item['Διάρκεια Σύμβασης']?.includes(contractFilter) : true)
    );
    setFilteredPrices(filtered);
  }, [providerFilter, yearFilter, monthFilter, contractFilter, prices]);

  // Handle sorting
  const handleSort = (column) => {
    const order = sortColumn === column && sortOrder === 'asc' ? 'desc' : 'asc';
    const sorted = [...filteredPrices].sort((a, b) => {
      const valA = parseFloat(a[column]) || 0;
      const valB = parseFloat(b[column]) || 0;
      return order === 'asc' ? valA - valB : valB - valA;
    });
    setFilteredPrices(sorted);
    setSortColumn(column);
    setSortOrder(order);
  };

  return (
    <div className="prices-page">
      <h1 style={{ marginTop: '80px' }}>Τιμολόγια Προμήθειας Ηλεκτρικής Ενέργειας</h1>
      <div className="filters">
        <input placeholder="Πάροχος" value={providerFilter} onChange={e => setProviderFilter(e.target.value)} />
        <input placeholder="Έτος" value={yearFilter} onChange={e => setYearFilter(e.target.value)} />
        <input placeholder="Μήνας" value={monthFilter} onChange={e => setMonthFilter(e.target.value)} />
        <input placeholder="Διάρκεια Σύμβασης" value={contractFilter} onChange={e => setContractFilter(e.target.value)} />
      </div>

      <table className="prices-table">
        <thead>
          <tr>
            <th>Πάροχος</th>
            <th>Έτος</th>
            <th>Μήνας</th>
            <th>Ονομασία Τιμολογίου</th>
            <th onClick={() => handleSort('Πάγιο (€/μήνα)')} style={{ cursor: 'pointer' }}>Πάγιο (€/μήνα)</th>
            <th onClick={() => handleSort('Τελική Τιμή Προμήθειας (€/ΚWh)')} style={{ cursor: 'pointer' }}>Τελική Τιμή (€/ΚWh)</th>
            <th>Διάρκεια Σύμβασης</th>
            <th>Παρατηρήσεις</th>
          </tr>
        </thead>
        <tbody>
          {filteredPrices.length > 0 ? (
            filteredPrices.map((item, index) => (
              <tr key={index}>
                <td>{item['Πάροχος']}</td>
                <td>{item['Έτος']}</td>
                <td>{item['Μήνας']}</td>
                <td>{item['Ονομασία Τιμολογίου']}</td>
                <td>{item['Πάγιο (€/μήνα)']}</td>
                <td>{item['Τελική Τιμή Προμήθειας (€/ΚWh)']}</td>
                <td>{item['Διάρκεια Σύμβασης']}</td>
                <td>{item['Παρατηρήσεις']}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Δεν βρέθηκαν αποτελέσματα</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


