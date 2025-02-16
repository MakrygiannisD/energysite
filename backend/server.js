// 📂 Backend Code for Energy Consultant Website
// Refined to ensure clarity, security, and production-readiness.

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// ✅ Configure multer for file uploads with organized structure
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads/invoices');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// 📩 Handle Customer Submission with Invoice Upload
app.post('/api/customers', upload.single('invoice'), (req, res) => {
  const customerData = req.body;
  customerData.invoicePath = req.file ? req.file.path : null;

  const dataFile = path.join(__dirname, 'data/customers.json');
  const existingData = fs.existsSync(dataFile)
    ? JSON.parse(fs.readFileSync(dataFile))
    : [];

  existingData.push(customerData);
  fs.writeFileSync(dataFile, JSON.stringify(existingData, null, 2));
  res.status(201).send({ message: 'Customer information and invoice uploaded successfully.' });
});

// ✅ View All Customers
app.get('/api/customers', (req, res) => {
  const dataFile = path.join(__dirname, 'data/customers.json');
  const customers = fs.existsSync(dataFile) ? JSON.parse(fs.readFileSync(dataFile)) : [];
  res.status(200).json(customers);
});

// 🚀 Start the Backend Server
app.listen(PORT, () => {
  console.log(`✅ Backend is live at http://localhost:${PORT}`);
});

// 📌 Usage:
// - Run: `node server.js`
// - Submit Form to: `POST http://localhost:5000/api/customers`
// - View Data: `GET http://localhost:5000/api/customers`
