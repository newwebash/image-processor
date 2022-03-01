import express from 'express';
import resizeImage from './api/resizeImage';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
    res.send('You hit my API!');
});

routes.use('/resizeImage', resizeImage);

export default routes;
