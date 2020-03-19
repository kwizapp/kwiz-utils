# kwiz-utils

`kwiz-utils` is an NPM package and library that provides shared code for the other components of `kwizapp`.

## Installation

1. Login to Github Package Registry using `npm login --registry=https://npm.pkg.github.com` and your credentials. Any provided access token will need at least the `repo` and `read:packages` scope.
2. Create a `.npmrc` file in your project and include `registry=https://npm.pkg.github.com/kwizapp`, which tells NPM to lookup the package in the Github registry. Github also serves any normal NPM package.
3. Install using `npm i @kwizapp/kwiz-utils`

## Development

`npm start` or `npm run test:watch`

## Test

`npm run test`
