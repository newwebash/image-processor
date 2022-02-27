import request from 'supertest';
import app from '../app';
const testImg = 'encenadaport.jpg'

describe(`resizeImage GET /api/resizeImage`, () => {
    it('returns an image when an image filepath is passed', async () => {
        const res = await request(app).get(`/api/resizeImage?filename=${testImg}`);

        //expect(res.status).toEqual(200);
        expect(res.type).toEqual('image/jpeg')
    });

    it('returns an error when NO image filepath is passed', async () => {
        const res = await request(app).get(`/api/resizeImage`);

        expect(res.status).toEqual(400);
        //expect(res.type).toEqual('image/jpeg')
    });
});

