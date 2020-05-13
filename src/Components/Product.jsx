import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
  const { title } = props;
  return (
    <div>
      {title}
      <Link data-testid="product-detail-link" path={`/products/${name}`}>Detalhes</Link>
    </div>
  );
}

export default Product;
