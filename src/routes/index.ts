import express from 'express';
import cakes from './api/cakes';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('You hit my API!');
});

routes.use('/cakes', cakes);

export default routes;
