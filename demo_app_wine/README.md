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

The Goal of this project was to choose a dataset which would allow me to build something resembling a simple e-commerce site, where a user would be able to search for and explore wines by choosing appropriate search filters, which is why I used the [Bordeaux Wines](https://github.com/algolia/datasets/raw/master/wine/bordeaux.json) dataset.

Data is fetched and then pushed to my Algolia account by `add_index_wines.py`, which only needs to be run once - or whenever new wines are added to the dataset.

I wanted the site to feel intuitive and uncluttered, which is why I changed the grid of hits to a list - keeping only a couple results on screen at a time and added collapsible filtering option on the side. All the design/css is done using the [materialize css](https://materializecss.com/) framework.

The widgets provided by instantSearch.js offer really powerful functionality, and design flexibility as each widget can be configured in `src/app.js`. Adding classes to specific nodes that are rendered in a widget is the fastest way to quickly style the site.

## To do: 
- De-duplicate the index properly, not just based on name
- Fix sortBy widget. Currently not working.

## Feedback:
Overall I think uploading an index and configuring it through the Algolia dashboard is a very easy process, although I'm sure there are much more complicated aspects I haven't touched. The documentation you provide is exceptional, all the resources I needed to develop something quickly were available and instantSearch.js is awesome! After configuring a couple widgets I felt like I really understood how it works and move much quicker.

The documentation around the sortBy widget is however a little lacking or ambiguous, especially around replicas and how to reference them - in the end I wasn't able to get it working.

One thing I thought could be improved was the de-duplication option only working with 1 attribute, which for wine was not ideal as none of the attributes were truly unique for me. Having the option to deduplicate records which are 100% identical would be a real help.