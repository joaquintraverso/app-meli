import Link from 'next/link';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Product(props) {

  const product = props.product;
  const img_id = product.thumbnail_id;
  const img = `https://http2.mlstatic.com/D_${img_id}-O.jpg`

  return (
    <Card style={{ width: '18rem', height: '30rem', border:'1px solid black'}}>
      <Card.Img className='card-img' variant="top" src={img} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          ${product.prices.prices[0].amount} ars.
        </Card.Text>
        <Link href={`/products/[id]`} as={`/products/${product.id}`} key={product.id}>
          <Button variant="secondary">Ver Más</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}