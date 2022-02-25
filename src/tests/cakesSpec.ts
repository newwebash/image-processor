import request from 'supertest';
import app from '../app';

describe('Cakes list GET /api/cakes', () => {
    it('returns a status 200', async () => {
        const res = await request(app).get('/api');

        expect(res.statusCode).toEqual(200);
    });
});
