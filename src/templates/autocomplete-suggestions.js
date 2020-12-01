const autocompleteProduct = hit => `<div class="autocomplete-product">
  <div class="autocomplete-product__details">
    <h3 class="autocomplete-product__name">${
      hit._highlightResult.query.value
    }</h3>
  </div>
</div>`;

export default autocompleteProduct;
