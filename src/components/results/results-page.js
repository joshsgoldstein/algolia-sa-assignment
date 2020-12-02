import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { hits, pagination, refinementList, clearRefinements, currentRefinements, stats, sortBy } from 'instantsearch.js/es/widgets';

import resultHit from './result-hit';

/**
 * @class ResultsPage
 * @description Instant Search class to display content on main page
 */
class ResultPage {
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
      hits({
        container: '#hits',
        templates: {
          item: resultHit,
        },
      }),
      pagination({
        container: '#pagination',
      }),
      clearRefinements({
        container: '#clear-refinements',
      }),
      currentRefinements({
        container: '#current-refinements',
      }),
      stats({
        container: '#stats',
      }),
      // sortBy({
      //   container: '#sort-by',
      //   items: [
      //     { label: 'Featured', value: 'instant_search' },
      //     { label: 'Price (asc)', value: 'instant_search_price_asc' },
      //     { label: 'Price (desc)', value: 'instant_search_price_desc' },
      //   ],
      // }),
      refinementList({
        container: '#brand-facet',
        attribute: 'brand',
      }),
      refinementList({
        container: '#categories-facet',
        attribute: 'categories',
      }),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
  }
}

export default ResultPage;
