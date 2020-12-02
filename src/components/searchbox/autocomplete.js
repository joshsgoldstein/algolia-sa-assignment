import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';

// Instant Search Widgets
import { hits, searchBox, configure, index } from 'instantsearch.js/es/widgets';
import { connectHits } from 'instantsearch.js/es/connectors'

// Autocomplete Template
import autocompleteProductTemplate from '../../templates/autocomplete-product';
import QSHits from '../../templates/autocomplete-suggestions';

// const autocomplete = connectAutocomplete(
//   ({ indices, refine, widgetParams }, isFirstRendering) => {
//     const { container } = widgetParams;

//     if (isFirstRendering) {
//       container.html('<select id="ais-autocomplete"></select>');

//       container.find('select').selectize({
//         options: [],
//         labelField: 'name',
//         valueField: 'name',
//         optgroups: indices.map((index, idx) => ({
//           $order: idx,
//           id: index.indexId,
//           name: index.indexId,
//         })),
//         optgroupField: 'section',
//         optgroupLabelField: 'name',
//         optgroupValueField: 'id',
//         highlight: false,
//         onType: refine,
//         onBlur() {
//           refine(this.getValue());
//         },
//         onChange: refine,
//         score() {
//           return function() {
//             return 1;
//           };
//         },
//         render: {
//           option: hit => `
//             <div class="hit">
//               ${instantsearch.highlight({ attribute: 'name', hit })}
//             </div>
//           `,
//         },
//       });

//       return;
//     }

//     const [select] = container.find('select');

//     select.selectize.clearOptions();
//     indices.forEach(index => {
//       if (index.hits.length) {
//         index.hits.forEach(hit =>
//           select.selectize.addOption(
//             Object.assign({}, hit, {
//               section: index.indexId,
//             })
//           )
//         );
//       }
//     });

//     select.selectize.refreshOptions(select.selectize.isOpen);
//   }
// );

/**
 * @class Autocomplete
 * @description Instant Search class to display content in the page's autocomplete
 */
class Autocomplete {
  /**
   * @constructor
   */
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._registerAutocomplete();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      'STUNKNEZ7U', 
      '6fd8be68ce099ddf825e764575b2b44c'
    );

    this._searchInstance = instantsearch({
      indexName: 'product_catalog',
      searchClient: this._searchClient,
    });

    this._searchSuggestions = instantsearch({
      indexName: 'product_suggestions',
      searchClient: this._searchClient,
    });
  }



  _registerAutocomplete() {
  //         // Customize UI of the Query Suggestion Hits
  //     this.renderQSHits = ({ widgetParams, hits }, isFirstRender) => {
  //       const container = document.querySelector(widgetParams.container);

  //       container.innerHTML = `<ul>
  //         ${hits
  //           .map(
  //             (item) => `
  //             <li>${instantsearch.highlight({ hit: item, attribute: 'query' })}</li>
  //           `
  //           )
  //           .join('')}
  //       </ul>`;
  //     };

  //     this.QSHits = connectHits(renderQSHits);
    
  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      configure({
        hitsPerPage: 3,
      }),
      searchBox({
        container: '#searchbox',
      }),
      hits({
        container: '#autocomplete-hits',
        templates: { item: autocompleteProductTemplate },
      }),
      index({
        indexName: 'product_suggestions',
      }).addWidgets([
        configure({
          hitsPerPage: 16,
        }),
        QSHits({
          container: '#autocomplete-suggestions',
        }),
      ]),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
    // this._searchSuggestions.start();
  }
}

export default Autocomplete;
