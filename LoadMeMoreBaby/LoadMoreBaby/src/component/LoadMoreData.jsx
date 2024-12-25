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
          counter === 0 ? 0 : counter * 20 //button clicked? increase dataProduct index to 1 => so skip 20.
        }`
      );
      const result = await response.json();
      console.log(result);
      //🔴 increasing the array if we have a response and if the response contains a product that is greater than 0
      if (result && result.products && result.products.length) {
        setDataProduct(result.products);
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

  //🔴 if loading data is not true
  if (loading) {
    return <div>blah loading data</div>;
  }
  return (
    <div className='container'>
      <div>
        {dataProduct && dataProduct.length
          ? dataProduct.map((item) => (
              <div key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <button>Load me more</button>
    </div>
  );
};

export default LoadMoreData;
