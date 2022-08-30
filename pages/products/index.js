import React from 'react'
import { Container } from 'react-bootstrap';
import Product from '../../components/Product';
import Search from '../../components/Search';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Products() {

  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
  
    const getApi = async () => {
      const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${'argentina'}&limit=20`);
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
      <Container className='d-inline justify-content-center'>
      {product.map(prod => {
          return (
            <Product
              product = {prod}
              key={prod.id}
            />
          )
        })}
      </Container>
    </div>
  )
}
