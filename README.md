# Simple blog webapp

Built it following this tutorial.
[YouTube link](https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)

Currently working on:
- notification system

## Available endpoints

/blogs          GET         Fetch all data

/blogs/{id}     GET         Fetch single article

/blogs          POST        Add new article

/blogs/{id}     DELETE      Delete an article

## Available Scripts

In the project directory, you can run:

### `npx json-server --watch data/db.json --port 8000`

Starts api.
Open [http://localhost:8000](http://localhost:8000) to access the endpoints.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
