# Jeopardy 

## Overview
I developed a Jeopardy web app with React and Material-UI that allows users to filter questions by date, difficulty, and category. Multiple filters can be selected concurrently; the web app will reload and update results each time a filter changes value. I call questions from the API by querying question category, date, and difficulty level.

* **Filtering by date**: Questions aired on specific dates can be selected by specifying a date range. Users can pick start and end dates either by selecting a date in the date picker calendar or by typing the date into the text box. 

* **Filtering by difficulty**: Question difficulty is controlled with a slider component, which has tick marks for each level of question difficulty (represented as dollar values). 

* **Filtering by category**: In order to allow users to filter by category, I scraped the http://jservice.io/popular page and created a JSON file containing the category titles and ID values of the 63 most popular categories. I then imported that JSON file into my category search filter, which has a drop-down menu from which the user can see possible menu items. There is also an auto-suggest feature built into my search bar to alert the user to which categories are and are not available. I chose to limit users to choosing from popular categories to improve the web app's speed; initially, when I imported all of the categories from the API, my web app frequently crashed due to the volume of categories available.

I enjoyed making this app, and I learned a great deal from the process; not only was it the first web app I've built, but it was also my first encounter with React and a much more intensive experience with JavaScript. A live version of my web app can be accessed at the following link: https://cwang19.github.io/jeopardy/

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
