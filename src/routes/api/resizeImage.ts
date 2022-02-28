import express from 'express';
import processImg from '../../functions/processImg';
const resizeImage = express.Router();
const processedPath = './application/processed/';

/**
 * Takes an image of any size and returns a new image file
 * resized according to the specified height and width.
 * Image is also placed in application/processed folder.
 * @param filename required string - full filename including
 * extension of a file placed in the application/pre_processed
 * folder.
 * @param width required number - desired image width in pixels
 * @param height required number - desired image height in pixels
 */
resizeImage.get('/', (req, res) => {
    const resizeImage = async () => {
        // validate that all required params were passed
        if (!req.query.filename || !req.query.width || !req.query.height) {
            res.status(400);
            res.send(
                'Error: request missing a required parameter. Filename, width, and height required.'
            );
            return;
        }
        const img = req.query.filename as string;
        const desiredWidth: number = parseInt(req.query.width as string);
        const desiredHeight: number = parseInt(req.query.height as string);

        const response = await processImg(img, desiredWidth, desiredHeight);
        res.sendFile(response, { root: processedPath });
    };

    resizeImage();
});

export default resizeImage;
