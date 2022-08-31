import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import Product from '../../components/Product';
import Header from '../../components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/router';

export default function Products() {

  const router = useRouter();

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
      <h1>Resultados para: {search}</h1>
      <div>
        <Header
          setSearch={setSearch}
        />
      </div>
      <Container className='row row-cols-3'>
      {product.map(prod => {
          return (
            <Product
              className='col'
              product = {prod}
              key={prod.id}
            />
          )
        })}
      </Container>
    </div>
  )
}
