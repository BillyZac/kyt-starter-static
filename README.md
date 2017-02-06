# Taco starter-kyt

This starter-kyt serves as the base for a tasty client-rendered React app.

Setting up a new project with all the stuff is a pain. This starter-kyt uses the configuration management tool [Kyt](https://github.com/NYTimes/kyt) to get a React app up and running quickly, with all the neat dev stuff wired up and ready to go.

## Installation

1. Create a new directory for your project.
2. Do an `npm init`. Then install [kyt](https://github.com/NYTimes/kyt) with `npm install -D kyt`
3. Scaffold your project with this command: `node_modules/.bin/kyt setup -r https://github.com/BillyZac/kyt-starter-taco.git`
4. Install dependencies: `npm install`
5. Serve up some delicious Taco-flavored React code: `npm run dev`. This runs a dev server with hot-reloading. Yum!
6. Check out the `scripts` in your `package.json` for more handy commands.

## Tools

The following are some of the tools included in this starter-kyt:

- [React](https://facebook.github.io/react/) - Component library
- [React Router](https://github.com/reactjs/react-router) - Server and client routing
- [Sass Modules](https://github.com/css-modules/css-modules) - CSS Modules with a Sass pre-processor for styles
- [Enzyme](https://github.com/airbnb/enzyme) - React component testing
- [html webpack plugin](https://github.com/ampedandwired/html-webpack-plugin) - Builds a static html file
