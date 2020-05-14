import React from 'react';
import { Link } from 'react-router-dom';

function ProductDetails({ title, thumbnail, price, ...details }) {
  console.log(title, thumbnail, price);
  return (
    <div>
      <h3 data-testid="product-detail-name">{title}</h3>
      <figure>
        <img alt="#" src={thumbnail} />
        <figcaption>{title} image</figcaption>
      </figure>
      <section>
        {Object.entries(details).map(([feature, value]) =>
          (typeof value === 'string' || typeof value === 'number') ?
             <li key={feature}>{feature}: {value}</li> : null
        )}
      </section>
      <Link to="/cart">Carrinho</Link>
    </div>
  );
}

export default ProductDetails;
