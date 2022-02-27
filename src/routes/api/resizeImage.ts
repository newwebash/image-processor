import express from 'express';
import sharp from 'sharp';
const resizeImage = express.Router();
const preProcessedPath = './application/pre_processed/'
const processedPath = './application/processed/'
const img = 'fjord.jpg'
const resizedImg = `${processedPath}fjord-resized.jpg`


resizeImage.get('/', (req, res) => {
    const resizeImage = async () => {
        try {
          await sharp(`${preProcessedPath}${img}`)
            .resize({
              width: 200,
              height: 200
            })
            .toFile(resizedImg)
            res.sendFile('fjord-resized.jpg', {root: processedPath})
            console.log("done resizing");
        } catch (error) {
          console.log(`An error occurred during processing: ${error}`);
          res.status(400)
          res.send(`An error occurred during processing: ${error}`)
        }
      }
      
      resizeImage();
});

export default resizeImage;

