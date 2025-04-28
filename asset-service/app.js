const express = require('express');
const sequelize = require('./config/database.js');
const assetRoutes = require('./routes/assetRoutes');
const cors = require('cors');

const app = express();
const port = 8082;

// Allow requests from anywhere (localhost:3000)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use('/assets', assetRoutes);

// Start server
async function connectWithRetry() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
    await sequelize.sync();
    console.log('Database synced successfully');
    startServer(); // Start Express server only if DB connected
  } catch (error) {
    console.error('Database connection failed. Retrying in 5 seconds...', error.message);
    setTimeout(connectWithRetry, 5000);
  }
}

function startServer() {
  const PORT = process.env.PORT || 8082;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

connectWithRetry();
