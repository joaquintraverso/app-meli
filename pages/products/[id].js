import { useRouter } from 'next/router'
import React from 'react'

export default function ProductDetails() {
  const router = useRouter();

  const [productId, setProductId] = React.useState([]);

  React.useEffect(() => {
  
    const getID = async () => {
      const res = await fetch(`https://api.mercadolibre.com/items/${router.query.id}`);
      const newProductId = await res.json();
      setProductId(newProductId);
    };

    getID();
    
  }, []);


  return (
    <div>
      <h4>{productId.title}</h4>
    </div>
  )
}
