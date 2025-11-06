const express = require('express');
const router = express.Router();

const sampleData = {
    name : 'spiderman',
    age: 25,
    city: 'New York'
};

router.get('/health', (req, res) => {
    res.status(200).json(sampleData);
});

module.exports = router;