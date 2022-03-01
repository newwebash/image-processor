import checkIfFileExists from '../functions/checkIfFileExists';
import processImg from '../functions/processImg';
const imgToProcess = 'encenadaport.jpg';
let correctImg: string;
const testHeight = 400;
const testWidth = 400;
const incorrectImg = 'nonexistent.jpg';

describe('checkIfFileExists', () => {
    beforeAll(async () => {
        correctImg = await processImg(imgToProcess, testWidth, testHeight);        
    })
    it('returns true if the file exits', () => {
        expect(checkIfFileExists(correctImg)).toEqual(true);
    });

    it('returns false if the file does not exist', () => {
        expect(checkIfFileExists(incorrectImg)).toEqual(false);
    });
});
