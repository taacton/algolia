/* global algoliasearch instantsearch */
const searchClient = algoliasearch(
  '8JYC6YT0ZO',
  '07653e954a1607260aa266b8e32c2b03'
);

const search = instantsearch({
  indexName: 'Planets',
  searchClient,
});

function nth(n){
  return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"
}

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item(item) {
        text = `
          <p>Name: ${item.name}</p>
          <p>Description: ${item.name} is the ${item.position}${nth(item.position)} planet from the Sun. It is a ${item.type[0]} planet.</p>
        `;
        item.type[2] ? item.type[1] = item.type[1] + ' ' + item.type[2]:item.type[1];
        text += `
          <p>Type: ${item.type[1]} planet</p>
        `;
        return text
      }
    }
  }),
  
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),

  instantsearch.widgets.configure({
    hitsPerPage: 4
  })

]);

search.start();
