import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';

// Instant Search Widgets
import { hits, searchBox, configure, index } from 'instantsearch.js/es/widgets';
import { connectHits } from 'instantsearch.js/es/connectors'

// Autocomplete Template
import autocompleteProductTemplate from '../../templates/autocomplete-product';
import QSHits from '../../templates/autocomplete-suggestions';

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
        showSubmit: true
      }),
      hits({
        container: '#autocomplete-hits',
        templates: { item: autocompleteProductTemplate },
      }),
      index({
        indexName: 'product_suggestions',
      }).addWidgets([
        configure({
          hitsPerPage: 4,
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
