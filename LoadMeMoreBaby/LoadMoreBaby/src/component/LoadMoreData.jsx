import React, { useEffect, useState } from 'react';

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [dataProduct, setDataProduct] = useState([]);
  const [counter, setCounter] = useState(0);

  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          counter === 0 ? 0 : counter * 20
        }`
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return <div className='container'>LoadMoreData</div>;
};

export default LoadMoreData;

//url the same VS url based on different scenarios
//load data store it state, load it the data stored
