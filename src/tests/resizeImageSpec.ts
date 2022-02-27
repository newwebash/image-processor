import request from 'supertest';
import app from '../app';
const testImg = 'santamonica.jpg'

describe(`resizeImage GET /api/resizeImage`, () => {
//describe(`resizeImage GET /api/resizeImage`, () => {
    it('returns an image when an image filepath is passed', async () => {
        const res = await request(app).get(`/api/resizeImage?${testImg}`);
        //console.log("🚀 ~ file: resizeImageSpec.ts ~ line 9 ~ it ~ res", res)

        //expect(res.status).toEqual(200);
        expect(res.type).toEqual('image/jpeg')
    });

    it('returns an error when NO image filepath is passed', async () => {
        const res = await request(app).get(`/api/resizeImage`);
        //console.log("🚀 ~ file: resizeImageSpec.ts ~ line 9 ~ it ~ res", res)

        expect(res.status).toEqual(400);
        //expect(res.type).toEqual('image/jpeg')
    });
});

