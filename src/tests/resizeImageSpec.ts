import request from 'supertest';
import app from '../app';
import deleteFile from '../functions/deleteFile';
const testImg = 'encenadaport.jpg';
const incorrectTestImg = 'es6.pdf';
const processedPath = './application/processed/';
const testHeight = 500;
const testWidth = 700;
const incorrectTestHeight = true;
const incorrectTestWidth = 'hi';
const resizedTestImg = `encenadaport-${testWidth}-${testHeight}.jpg`;

describe(`resizeImage GET /api/resizeImage`, () => {
    beforeAll(() => {
        const path = `${processedPath}${resizedTestImg}`;
        deleteFile(path);
    });

    it('returns an error when NO arguments is passed', async () => {
        const res = await request(app).get(`/api/resizeImage`);

        expect(res.status).toEqual(400);
    });

    it('returns an error when NO image filepath is passed', async () => {
        const res = await request(app).get(
            `/api/resizeImage?width=${testWidth}&height=${testHeight}`
        );

        expect(res.status).toEqual(400);
    });

    it('returns an error when NO image dimensions are passed', async () => {
        const res = await request(app).get(
            `/api/resizeImage?filename=${testImg}`
        );

        expect(res.status).toEqual(400);
    });

    it('returns an error when incorrect image filename is passed', async () => {
        const res = await request(app).get(
            `/api/resizeImage?filename=${incorrectTestImg}&width=${testWidth}&height=${testHeight}`
        );

        expect(res.status).toEqual(400);
    });

    it('returns an error when incorrect image dimensions are passed', async () => {
        const res = await request(app).get(
            `/api/resizeImage?filename=${testImg}&width=${incorrectTestWidth}&height=${incorrectTestHeight}`
        );

        expect(res.status).toThrowError;
    });

    it('returns an image when an image filepath is passed', async () => {
        const res = await request(app).get(
            `/api/resizeImage?filename=${testImg}&width=${testWidth}&height=${testHeight}`
        );

        expect(res.type).toEqual('image/jpeg');
    });
});
