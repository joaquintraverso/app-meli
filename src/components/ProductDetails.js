import React from 'react'

export default function ProductDetails(props) {

  const product = props.product;
  const details = props.details;

  const img_id = product.thumbnail_id;
  const img = `https://http2.mlstatic.com/D_${img_id}-O.jpg`


  return (
    <div className='product-details'> 
      <img className='img-details' src={img} />
      <div className='text-details'>
        <h2 className='title-details'>{product.title}</h2>
        <p className='description-details'>
          {details.plain_text}
        </p>
        <h3 className='price-details'>
          ${product.price} ars.
        </h3>
      </div>
    </div>
  )
}

