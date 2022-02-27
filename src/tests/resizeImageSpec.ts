import request from 'supertest';
import fsPromises from 'fs';
import sharp from 'sharp';
import app from '../app';
const testImg = 'encenadaport.jpg';
const processedPath = './application/processed/';
const testHeight = 500;
const testWidth = 700;
const resizedTestImg = `encenadaport-${testWidth}-${testHeight}.jpg`;

describe(`resizeImage GET /api/resizeImage`, () => {
    beforeAll(() => {
        const path = `${processedPath}${resizedTestImg}`;
        if (fsPromises.existsSync(path)) {
            try {
                fsPromises.unlinkSync(path);
            } catch (err) {
                console.log(err);
            }
        }
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

    it('returns an image when an image filepath is passed', async () => {
        const res = await request(app).get(
            `/api/resizeImage?filename=${testImg}&width=${testWidth}&height=${testHeight}`
        );

        expect(res.type).toEqual('image/jpeg');
    });

    it('places the specified image in the processed folder with the specficied image size', async () => {
        const res = await request(app).get(
            `/api/resizeImage?filename=${testImg}&width=${testWidth}&height=${testHeight}`
        );

        expect(
            fsPromises.existsSync(`${processedPath}${resizedTestImg}`)
        ).toEqual(true);

        const getImgSize = async () => {
            try {
                const metadata = await sharp(
                    `${processedPath}${resizedTestImg}`
                ).metadata();

                expect(metadata.height).toEqual(testHeight);
                expect(metadata.width).toEqual(testWidth);
            } catch (error) {
                console.log(error);
            }
        };
        getImgSize();
    });
});
