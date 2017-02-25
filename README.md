# react-shopping-cart-demo

A shopping cart demo made with React, Redux, and React-router.
This demo includes unit and integration tests.

## Getting started

Clone the git repo:

```
git clone https://github.com/paulmskim/react-shopping-cart-demo.git
```

Install node modules:

```
npm install
```

Run express server with `npm run server` and visit http://localhost:8080.

To make changes to the React components, ensure `npm run server` is not running
and run `npm run dev` to begin making changes. Whenever a file is saved,
webpack-dev-server will compile the code and the browser will automatically
refresh http://localhost:8080 to reflect the changes.

When all the changes have been made, run `npm run build` to build a new static
asset or `npm run prod` to build a production-optimized asset.

## Testing

To run unit tests, run:

```
npm run unit-test
```

Coverage of components can be see in `/coverage`.

To run integration tests, run:

```
npm run integration-test
```

Ensure you have at least Firefox 49 for integration tests. Webdriverio
selectByValue will not work in Firefox 48 and earlier.
