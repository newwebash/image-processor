import request from 'supertest';
import app from '../app';

/**Example endpoint test */

describe('Example API endpoint test -- GET /api', () => {
    it('returns status 200', async () => {
        const res = await request(app).get('/api');

        expect(res.statusCode).toEqual(200);
    });

    it('returns status 404', async () => {
        const res = await request(app)
            .post('/api')
            .send({ exampeParam: 'a string' });

        expect(res.statusCode).toEqual(404);
    });
});
