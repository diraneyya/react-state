# Minimal React App with State

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) but stripped down to the bare minimum.

Instructions below are provided for my students.

## Step 1. Install NodeJS (if not installed)

Ideally, you should be using _Node 14.17.6_ for this project as mentioned in the corresponding `.nvmrc` file in the root of the [React GitHub repository](https://github.com/facebook/react). If you do not know how to do that, you might want to ask your teacher about how to use `nvm` or the _Node Version Manager_.

## Step 2. Install the Dependencies of the Project

Once you have NodeJS installed, and before attempting to use any of the `npm` commands below, please re-create the `node_modules` folder.

This is done using the following command in the terminal:

```bash
npm install
```

The command can be abbreviated as `npm i` where `i` stands for `install`.

## Step 3. Start or Build the Project

See below a full list of the npm script commands supported by the project (documentation passed on from the create-react-app tool):

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.