# Restaurant App -- Charter Front-End Code Challenge

Find the deployed project at

## Diana Grams

[GitHub](https://github.com/deegrams221) | [LinkedIn](https://www.linkedin.com/in/diana-grams/) | [Portfolio](https://dianagrams.dev/)

## Project Overview

![React](https://img.shields.io/badge/react-v17.0.1-blue.svg)
[![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
![netlify](https://img.shields.io/netlify/60ed14aa-ffc4-4ac0-9f41-c1b60e097554)

<br>

> React application that pulls restaurant data from a simple REST API, displays
> that data in a table, and allows users to filter that data.

<br>

### API Endpoint:

```
https://code-challenge.spectrumtoolbox.com/api/restaurants
```

<br>

### API Key Header:

```
Authorization | Api-Key q3MNxtfep8Gt
```

<br>

### Example Fetch:

```
fetch(“https://code-challenge.spectrumtoolbox.com/api/restaurants”, {
    headers: {
        Authorization: “Api-Key q3MNxtfep8Gt”,
    },
});
```

<br>

### User stories are as follows:

- A user should be able to see a table with the name, city, state, phone number, and genres for each restaurant.
- A user should see results sorted by name in alphabetical order starting with the beginning of the alphabet
- A user should be able to filter restaurants by state.
- A user should be able to filter by genre.
- State and Genre filters should default to “All” and take effect instantaneously (no additional clicks).
- A user should be able to enter text into a search field. When hitting the enter key or clicking on a search
  button, the table should search results. Search results should match either the name, city, or genre.
- A user should be able to clear the search by clearing the text value in the search input.
- A user should only see 10 results at a time and the table should be paginated.
- A user should be able to combine filters and search. The user should be able to turn filters on and off while a
  search value is present.
- If any of the filters do not return any restaurants, the UI should indicate that no results were found.

<br>

### Technology Used:

React.js | JavaScript | CSS

<br>

### Requirements:

- Deployed application
- No use of third-party component libraries for the table/filter/search.
- Using Create-React-App or Next.js as a starter kit is okay.
- Well organized file structure
- Descriptive naming conventions
- DRY code that is readable and production ready
- Reusable components
- Sound logic for how the filters are architected
- Styling follows a convention/pattern and is well organized
- Full Git history with atomic commits

<br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
