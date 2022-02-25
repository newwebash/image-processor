import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.send('You hit my API!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

export default app;
