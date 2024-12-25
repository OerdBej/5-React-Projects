import React, { useEffect, useState } from 'react';

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [dataProduct, setDataProduct] = useState([]);
  const [counter, setCounter] = useState(0);

  async function fetchProducts() {
    try {
      const response = await fetch(
        'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
      );
    } catch (error) {}
  }

  useEffect(() => {}, []);
  return <div className='container'>LoadMoreData</div>;
};

export default LoadMoreData;

//url the same VS url based on different scenarios
//load data store it state, load it the data stored
