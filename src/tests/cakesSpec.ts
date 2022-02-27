import request from 'supertest';
import app from '../app';

describe('Cakes list GET /api/cakes', () => {
    it('returns a status 200 and a list of cakes', async () => {
        const res = await request(app).get('/api/cakes');
        
        expect(res.status).toEqual(200);
        expect(res.body).toEqual([ 'Chocolate', 'Vanilla', 'Red Velvet' ]);
    });
});
