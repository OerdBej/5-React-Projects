import { useEffect, useState } from 'react';

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [dataProduct, setDataProduct] = useState([]);
  const [counter, setCounter] = useState(0);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          counter === 0 ? 0 : counter * 20
        }`
      );
      const result = await response.json();
      console.log(result);
      if (result && result.product && result.product.length) {
        setDataProduct(result.product);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>blah loading data</div>;
  }
  return <div className='container'>LoadMoreData</div>;
};

export default LoadMoreData;
