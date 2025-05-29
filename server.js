const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const feedbackRoutes = require('./routes/feedbackRoutes');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use('/api/feedback', feedbackRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
