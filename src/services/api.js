export async function getCategories() {
  const api = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await api.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const api = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}');
  const response = await api.json();
  return response;
}
