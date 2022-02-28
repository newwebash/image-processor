import fsPromises from 'fs';
import deleteFile from '../functions/deleteFile';
import processImg from '../functions/processImg';

const testImg = 'icelandwaterfall.jpg';
const processedPath = './application/processed/';
const testHeight = 400;
const testWidth = 400;
let resizedTestImg: string;

describe('deleteFile', () => {
    beforeEach(async () => {
        resizedTestImg = await processImg(testImg, testWidth, testHeight);
    });

    it('removes the specified file from the processed folder', () => {
        const pathToImg = `${processedPath}${resizedTestImg}`;
        expect(fsPromises.existsSync(pathToImg)).toEqual(true);
        deleteFile(pathToImg);
        expect(fsPromises.existsSync(pathToImg)).toEqual(false);
    });

    it('throws an error if the file does not exist', () => {
        expect(deleteFile(`${processedPath}test`)).toContain('Error');
    });
});
