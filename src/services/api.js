export async function getCategories() {
  const api = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await api.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const api = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = await api.json();
  return response;
}

export function updateLinkCart(variation) {
  this.setState((state) => ({ unitsInCart: state.unitsInCart + variation }));
}

export function unitsInCart() {
  const products = JSON.parse(localStorage.getItem('buyList'));
  if (!products) return 0;
  return products.reduce((total, product) => total + Number(product.qnt), 0);
}
