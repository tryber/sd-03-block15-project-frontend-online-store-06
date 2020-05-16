export function updateLinkCart(variation) {
  this.setState((state) => ({ unitsInCart: state.unitsInCart + variation }));
}

export function unitsInCart() {
  const products = JSON.parse(localStorage.getItem('buyList'));
  if (!products) return 0;
  return products.reduce((total, product) => total + Number(product.qnt), 0);
}
