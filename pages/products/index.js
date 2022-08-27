import React from 'react'

export default function Products() {

  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
  
    const getApi = async () => {
      const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${'Motorola'}&limit=20`);
      const newProduct = await res.json();
      setProduct(newProduct.results);
    };

    getApi();
  
  }, []);


  return (
    <div>
      <h1>Products</h1>
      <div>
        {product.map(prod => {
          return (
            <h3>{prod.title}</h3>
          )
        })}
      </div>
    </div>
  )
}
