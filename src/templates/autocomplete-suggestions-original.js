const autocompleteSuggestions = hit => `<div class="autocomplete-suggestions">
  <div class="autocomplete-suggestions__details">
    <h3 class="autocomplete-suggestions__name">${
      hit._highlightResult.query.value
    }</h3>
  </div>
</div>`;

export default autocompleteSuggestions;
