import React from 'react';
import { Link } from 'react-router-dom';

function ProductDetails({ title, thumbnail, price, ...details}) {
  return (
    <div>
      <h3 data-testid="product-detail-name">{title}</h3>
      <figure>
        <img alt="#" src={thumbnail} />
        <figcaption>{title} image</figcaption>
      </figure>
      <section>
        {Object.entries(details).map(([ feature, value]) =>
          <li key={feature}>{feature}: {value}</li>)}
      </section>
      <Link path="/cart">Carrinho</Link>
    </div>
  );
}

export default ProductDetails;
