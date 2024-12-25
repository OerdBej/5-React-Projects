import { useEffect, useState } from 'react';
import './style.css'; // Assuming this is your CSS file

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
      if (result && result.products && result.products.length) {
        setDataProduct(result.products);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div className='loading'>blah loading data</div>;
  }
  return (
    <div className='container'>
      <div className='product-list'>
        {dataProduct && dataProduct.length
          ? dataProduct.map((item) => (
              <div key={item.id} className='product-item'>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className='product-image'
                />
                <p className='product-title'>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <button className='load-more-button'>Load me more</button>
    </div>
  );
};

export default LoadMoreData;
