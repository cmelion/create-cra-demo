This playground project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Branches

#### Counter DEMO
* [react-hooks-version](https://github.com/cmelion/react-cra-demo/tree/cfulnecky/react-hooks-version)     - demonstrates useState hook for local state management
* [redux-connect-version](https://github.com/cmelion/react-cra-demo/tree/cfulnecky/redux-connect-version) - demonstrates redux using react-redux connect method
* [react-redux-hooks-version](https://github.com/cmelion/react-cra-demo/tree/cfulnecky/redux-hooks-version)   - demonstrates redux using react-redux hooks method

##### Compare implementations
* [redux-hooks vs redux-connect](https://github.com/cmelion/react-cra-demo/compare/cfulnecky/redux-hooks-version...cfulnecky/redux-connect-version)
* [react-hooks vs redux-hooks](https://github.com/cmelion/react-cra-demo/compare/cfulnecky/redux-hooks-version...cfulnecky/react-hooks-version)
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run cucumber`
This will run cucumber style unit tests with support for Enzyme and Jest

### `npm run json-server`
A full fake REST API with zero coding - https://github.com/typicode/json-server

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

### React-🔥-Dom

React-🔥-Dom ([hot-loader/react-dom](https://github.com/hot-loader/react-dom)) replaces the "react-dom" package of the same version, but with additional patches to support hot reloading.

There are 2 ways to install it:

* Use **yarn** name resolution, so `@hot-loader/react-dom` would be installed instead of `react-dom`

```
yarn add react-dom@npm:@hot-loader/react-dom
```

* Use webpack **aliases**

```
yarn add @hot-loader/react-dom
```

```js
// webpack.conf
...
resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
}
...
```

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
