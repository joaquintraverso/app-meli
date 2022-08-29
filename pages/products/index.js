import React from 'react'
import Product from '../../components/Product';
import Search from '../../components/Search';

export default function Products() {

  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
  
    const getApi = async (search) => {
      const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=20`);
      const newProduct = await res.json();
      setProduct(newProduct.results);
    };

    getApi();
  
  }, []);


  return (
    <div>
      <h1>Products</h1>
      <div>
        <Search
          setProduct={setProduct}
        />
      </div>
      <div>
        {product.map(prod => {
          return (
            <Product
              product = {prod}
              key={prod.id}
            />
          )
        })}
      </div>
    </div>
  )
}
