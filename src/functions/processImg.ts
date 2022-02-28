import sharp from 'sharp';
const preProcessedPath = './application/pre_processed/';
const processedPath = './application/processed/';

const processImg = async (
    originalImg: string,
    desiredWidth: number,
    desiredHeight: number
): Promise<string> => {
    const resizedImg = originalImg.replace(
        '.',
        `-${desiredWidth}-${desiredHeight}.`
    );
    try {
        await sharp(`${preProcessedPath}${originalImg}`)
            .resize({
                width: desiredWidth,
                height: desiredHeight,
            })
            .toFile(`${processedPath}${resizedImg}`);
        return `${resizedImg}`;
    } catch (error) {
        console.log(error);
        return `Error while processing ${originalImg}: ${error}`;
    }
};

export default processImg;
