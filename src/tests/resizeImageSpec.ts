import request from 'supertest';
import fsPromises from 'fs';
import sharp from 'sharp';
import app from '../app';
const testImg = 'encenadaport.jpg';
const resizedTestImg = 'encenadaport-resized.jpg';
const processedPath = './application/processed/';
const testHeight = 400;
const testWidth = 400;

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

    it('returns an error when NO image filepath is passed', async () => {
        const res = await request(app).get(`/api/resizeImage`);

        expect(res.status).toEqual(400);
    });

    it('returns an image when an image filepath is passed', async () => {
        const res = await request(app).get(
            `/api/resizeImage?filename=${testImg}`
        );

        expect(res.type).toEqual('image/jpeg');
    });

    fit('places the specified image in the processed folder with the specficied image size', async () => {
        const res = await request(app).get(
            `/api/resizeImage?filename=${testImg}`
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
