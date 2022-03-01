# Image Processor

The Image Processor allows you to resize an image of any size to
view in your browser, or to download a library of resized thumbnails.

This application was written in Node, Express, and Typescript, and tested
with Jasmine and Supertest by @newwebash.


## How to use

**To view resized image in the browser**:

1. Start the application on a local server using the [script](#scripts) below.
2. Place the image you'd like to resize in the `application/pre_processed` directory.
   Or, feel free to use one of the image files already found in the directory.
3. Open the browser of your choice and go to `http://localhost:3000/api/resizeImage?filename=<YOUR_IMAGE.EXT>&width=<YOUR_WIDTH>&height=</YOUR_WIDTH>`

   For example, if you want to resize the `santamonica.jpg` file to 300 pixels wide
   and high, visit `http://localhost:3000/api/resizeImage?filename=santamonica.jpg&width=300&height=300`

   Result: The resized image shows in your browser. Feel free to re-use this url
   to embed the image in your website.

**To get the thumbnail library**:

1. Go to the `application/processed` directory. This contains all images that have
   been generated so far. Feel free to download the entire directory or individual
   files as needed.
2. If you don't see the thumbnail size you want, you can generate it following the
   instructions above. Alternatively, you can query the endpoint via Postman or Curl.

## How to test

This applicaton has been tested with Jasmine and Supertest. You can run the tests
and see test output by running the build and test script listed below.

## Scripts

Install project dependencies

```
npm i
```

Run linter

```
npm run lint
```

Run code formatter

```
npm run prettier
```

Build project

```
npm run build
```

Build project and run tests (Jasmine and Supertest)

```
npm run test
```

Start the local server

```
npm run start
```