import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import Product from '../../components/Product';
import Search from '../../components/Search';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Products() {

  const [search, setSearch]= useState("");

  const [product, setProduct] = useState([]);

  useEffect(() => {
  
    const getApi = async (search) => {
      const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=20`);
      const newProduct = await res.json();
      setProduct(newProduct.results);
    };

    getApi(search);
  
  }, [search]);


  return (
    <div>
      <h1>Products</h1>
      <div>
        <Search
          setSearch={setSearch}
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
