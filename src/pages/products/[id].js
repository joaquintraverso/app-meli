import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'
import Layout from '../../components/Layout';
import ProductDetails from '../../components/ProductDetails';

export default function ProductId() {
 
  const router = useRouter();

  const [productId, setProductId] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
  
    const getID = async () => {
      const res = await fetch(`https://api.mercadolibre.com/items/${router.query.id}`);
      const newProductId = await res.json();
      setProductId(newProductId);

      const resDetails = await fetch(`https://api.mercadolibre.com/items/${router.query.id}/description`);
      const newProductDetails = await resDetails.json();
      setProductDetails(newProductDetails);
    };

    getID();
    
  }, []);


  return (
    <Layout>
      <ProductDetails
        product = {productId}
        details = {productDetails} 
        key = {productId.id} 
      />
    </Layout>
  )
}
