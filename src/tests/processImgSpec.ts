import fsPromises from 'fs';
import sharp from 'sharp';
import processImg from '../functions/processImg';
import deleteFile from '../functions/deleteFile';
const testImg = 'icelandwaterfall.jpg';
const processedPath = './application/processed/';
const testHeight = 200;
const testWidth = 700;
const resizedTestImg = `icelandwaterfall-${testWidth}-${testHeight}.jpg`;

describe('processImg', () => {
    beforeAll(() => {
        const path = `${processedPath}${resizedTestImg}`;
        deleteFile(path);
    });

    it('places the specified image in the processed folder', async () => {
        const resizedImg = await processImg(testImg, testWidth, testHeight);
        expect(fsPromises.existsSync(`${processedPath}${resizedImg}`)).toEqual(
            true
        );
    });

    it('it resizes the image with the specified image size', async () => {
        const resizedImg = await processImg(testImg, testWidth, testHeight);
        const getImgSize = async () => {
            try {
                const metadata = await sharp(
                    `${processedPath}${resizedImg}`
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
