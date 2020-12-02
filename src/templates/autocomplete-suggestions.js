import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { connectHits } from 'instantsearch.js/es/connectors'
const renderQSHits = ({ widgetParams, hits }, isFirstRender) => {
  const container = document.querySelector(widgetParams.container);

  container.innerHTML = `<ul>
    ${hits
      .map(
        (item) => `
        <li>${instantsearch.highlight({ hit: item, attribute: 'query' })}</li>
      `
      )
      .join('')}
  </ul>`;
};

const QSHits = connectHits(renderQSHits);
export default QSHits;