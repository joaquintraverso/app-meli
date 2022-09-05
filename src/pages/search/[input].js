import React, {useEffect, useState} from 'react'
import Product from '../../components/Product';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Products() {

  const router = useRouter();

  const search = router.query.input;

  const [product, setProduct] = useState([]);

  useEffect(() => {
  
    const getApi = async (search) => {
      const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=15`);
      const newProduct = await res.json();
      setProduct(newProduct.results);
    };

    getApi(search);
  
  }, [search]);

  return (
    <Layout>
      < div className='section-products' >
        {product.map(prod => {
          return (
            <Product
              className='col'
              product = {prod}
              key={prod.id}
            />
          )
        })}
      </div>
    </Layout>
  )
}
