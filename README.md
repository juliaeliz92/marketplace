This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

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

Goal:
Create a simple marketplace webpage satisfying the following requirements:
- Login page
- Display list of items with prices via and endpoint
- Ability to search these list of items
- Shopping cart functionality to add/remove items
- Checkout shopping cart (this view should allow you to add/remove items as well)
- Checkout should calculate taxes (assume HST)
- Checkout should present cart total
Assumptions:
- You can mock endpoints to get your data.
- Data will be based on the sample data below
- You can decide the format of the data (ie. json, csv, etc.)
Sample Data for the List:
Sku # name description price
1234 apple macintosh 1.99
5678 orange Mandarin oranges 5.99
