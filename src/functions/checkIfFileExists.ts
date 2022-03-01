import fsPromises from 'fs';
const filepath = './application/processed/';

/**
 * checkIfFileExists assumes the given image is under the
 * 'application/proccessed' path
 * @param filepathAndFilename
 * @returns
 */
const checkIfFileExists = (filename: string): boolean => {
    return fsPromises.existsSync(`${filepath}${filename}`) ? true : false;
};

export default checkIfFileExists;
