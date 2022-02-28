import fsPromises from 'fs';

const deleteFile = (filepathAndFilename: string): string => {
    if (fsPromises.existsSync(filepathAndFilename)) {
        try {
            fsPromises.unlinkSync(filepathAndFilename);
            return 'file deleted';
        } catch (err) {
            return `Error while processing ${filepathAndFilename}: ${err}`;
        }
    } else {
        return `Error: ${filepathAndFilename} does not exist`;
    }
};

export default deleteFile;
