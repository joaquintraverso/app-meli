import Link from 'next/link';
import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Product(props) {

  const product = props.product;
  const img_id = product.thumbnail_id;
  const img = `https://http2.mlstatic.com/D_${img_id}-O.jpg`

  return (
    <div>
      <Card style={{height: '380px', width: '300px' }}>
        <Link href={`/products/[id]`} as={`/products/${product.id}`} key={product.id}>
          <Card.Img variant="top" src={img} />
        </Link>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            ${product.prices.prices[0].amount} ars.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
