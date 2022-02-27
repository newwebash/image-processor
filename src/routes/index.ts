import express from 'express';
import cakes from './api/cakes';
import resizeImage from './api/resizeImage';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('You hit my API!');
});

routes.use('/cakes', cakes);
routes.use('/resizeImage', resizeImage);

export default routes;
