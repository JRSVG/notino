# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Q&A in the assignment
ASSIGNMENT: 
Here is sample code that is not by far ideal: https://gist.github.com/remunda/485e76c63c638b765a399810222c3415

Refactor code to production-grade quality.
Find and describe bugs and issues.
Add styling by your choice. (You can add styling library)
Demonstrate connection to backend API.
Add Todo detail page (add routing to app, use context api for state managment from fetch todos to render todos and detail)
Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it
Optional: rewrite Todo component to FC (choose if you want, prepare explanation)

ANSWERS:
1. Done
2. Bugs:
	- [App.tsx]: useEffect is running during every re-render so always
	- [App.tsx]: setState is not taking last state, in some cases it can cause problems (setState(prevState => [prevState, awaitedTodos[i]]))
	- [App.tsx]: Todo component has no key value
	- [App.tsx]: No error handling with async task
	- [Todo.tsx]: Iappropriate way of changing URL - We should use router instead and use function "navigate" or use Link component
3. Added styling with Material UI
4. Connected to open API
5. Added detail page, context API, react router
6. Comparison of props should be done either
	- JSON.stringify(prevProps) === JSON.stringify(this.props)
	- import _ from 'lodash' ===> _isEqual(prevProps, this.props) 
7. Rewritten to FC
