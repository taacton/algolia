# demo_app_wine

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

## Get started:

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Then open http://localhost:3000 to see the app.

## About:
This project was generated using the following parameters:

```npx create-instantsearch-app demo_app_wine \
  --template "InstantSearch.js" \
  --app-id "8JYC6YT0ZO" \
  --api-key "07653e954a1607260aa266b8e32c2b03" \
  --index-name Wines \
  --attributes-to-display name
```

The Goal of this project was to choose a dataset which would allow me to build something resemblling an e-commerce site, where a user would be able to search for and explore wines by choosing appropriate search refinements, which is why I used the [Bordeaux Wines](https://github.com/algolia/datasets/raw/master/wine/bordeaux.json) dataset.

Data is fetched and then pushed to my Algolia account by `add_index_wines.py`, which only needs to be run once - or whenever new wines are added to the dataset.

