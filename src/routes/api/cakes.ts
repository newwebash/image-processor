import express from 'express';
const cakes = express.Router();

const cakesList = ['Chocolate', 'Vanilla', 'Red Velvet'];

cakes.get('/', (req, res) => {
    res.send(cakesList);
});

export default cakes;
