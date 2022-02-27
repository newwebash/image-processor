import express from 'express';
import sharp from 'sharp';
const resizeImage = express.Router();
const preProcessedPath = './application/pre_processed/';
const processedPath = './application/processed/';

resizeImage.get('/', (req, res) => {
    const resizeImage = async () => {
        if (req.query.filename == null) {
            res.status(400);
            res.send('Error: no filename provided');
            return;
        }
        const img = req.query.filename as string;
        const resizedImg = img.replace('.', '-resized.');
        try {
            await sharp(`${preProcessedPath}${img}`)
                .resize({
                    width: 200,
                    height: 200,
                })
                .toFile(`${processedPath}${resizedImg}`);
            res.sendFile(resizedImg, { root: processedPath });
        } catch (error) {
            console.log(`An error occurred during processing: ${error}`);
            res.status(400);
            res.send(`An error occurred during processing: ${error}`);
        }
    };

    resizeImage();
});

export default resizeImage;
