/* global algoliasearch instantsearch */

// This file contains all the configuration for widgets called using instantSearch.js

const searchClient = algoliasearch(
  '8JYC6YT0ZO',
  '07653e954a1607260aa266b8e32c2b03'
);

const search = instantsearch({
  indexName: 'Wines',
  searchClient,
});

search.addWidgets([

  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),

  instantsearch.widgets.sortBy({ // The sortBy widget doesn't seem to work, I think my values aren't setup properly to call my replica index
    container: '#sort-by',
    items: [
      { label: 'Featured', value: 'instant_search' },
      { label: 'Price (asc)', value: 'instant_search_price' },
      { label: 'Price (desc)', value: 'instant_search_price_desc' },
      { label: 'Rating (asc)', value: 'instant_search_quality' },
      { label: 'Rating (desc)', value: 'instant_search_quality_desc' } 
    ]
  }),

  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
    cssClasses: {
      button: 'waves-effect waves-light btn-small'
    }
  }),

  instantsearch.widgets.refinementList({
    container: '#type-list',
    attribute: 'type',
    sortBy: ['name:desc', 'count:desc'],
    operator: 'or',
    limit: '10',
    searchable: false,
    showMore: false
  }),

  instantsearch.widgets.refinementList({
    container: '#domain-list',
    attribute: 'domain',
    sortBy: ['name:desc', 'count:desc'],
    operator: 'or',
    limit: '10',
    searchable: false,
    showMore: true,
    cssClasses: {
      showMore: 'waves-effect waves-light btn-small'
    }
  }),

  instantsearch.widgets.refinementList({
    container: '#year-list',
    attribute: 'year',
    sortBy: ['name:desc', 'count:desc'],
    operator: 'or',
    limit: '10',
    searchable: false,
    showMore: true,
    cssClasses: {
      showMore: 'waves-effect waves-light btn-small'
    }
  }),

  instantsearch.widgets.rangeSlider({
    container: '#rating-list',
    attribute: 'quality',
    min: 87,
    max: 100,
    precision: 5,
    step: 1,
    pips: false
  }),

  instantsearch.widgets.numericMenu({
    container: '#price-list',
    attribute: 'price',
    items: [
      { label: 'All' },
      { label: 'Less than €50', end: 50 },
      { label: '€50 - €100', start: 50, end: 100 },
      { label: '€100 - €250', start: 100 },
      { label: 'More than €250', start: 250 }
    ]
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    cssClasses: {
      root: 'row',
      item: 'hit-card card white darken-1',
    },
    templates: { // Using a template to have more control over the layout of each hit
      item(item) {
        text = `
          <div class="card-content black-text">
            <span class="card-title">${item.name}</span>
            <img src="${item.image}"/>
            <p>Type: ${item.type}</p>
            <p>Domain: ${item.domain}</p>
            <p>Year: ${item.year}</p>
            <p>Rating: ${item.quality}</p>
            <p>€${item.price}</p>
          </div>
          <div class="card-action">
            <a class="waves-effect waves-light btn" style="background-color: #c5cae9; float: right;" href="purchase.html?name=${item.name}&domain=${item.domain}&year=${item.year}&price=${item.price}">Buy Now</a>
          </div>
          <script>fbq('track', 'ViewContent', {'content_name': '${item.name}', 'value': '${item.price}', 'currency': 'EUR'});</script>
        `;
        return text
      }
    }
  }),
  
  instantsearch.widgets.pagination({
    container: '#pagination',
    cssClasses: {
      item: 'pagination',
    }
  }),

  instantsearch.widgets.configure({
    hitsPerPage: 10
  })
]);

search.start();

