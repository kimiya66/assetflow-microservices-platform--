const express = require('express');
const router = express.Router();
const Asset = require('../models/Asset');
const axios = require('axios');

// Read from environment
const EMPLOYEE_SERVICE_HOST = process.env.EMPLOYEE_SERVICE_HOST || 'localhost';
const EMPLOYEE_SERVICE_PORT = process.env.EMPLOYEE_SERVICE_PORT || '8081';


//Create asset 
router.post('/', async(req, res) => {
    try {
        const asset = await Asset.create(req.body);
        res.json(asset);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
});

// Get all assets
router.get('/', async(req, res) => {
    try {
        const assets = await Asset.findAll();
        res.json(assets);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});;

// endpoint to fetch employees
router.get('/employees', async (req, res) => {
    try {
        const response = await axios.get(`http://${EMPLOYEE_SERVICE_HOST}:${EMPLOYEE_SERVICE_PORT}/employees`);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Could not fetch employees' });
    }
});

  



module.exports = router;