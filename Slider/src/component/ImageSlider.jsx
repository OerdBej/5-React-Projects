import React, { useEffect, useState } from 'react';

export default function ImageSlider({ url, limit }) {
  const [image, setImages] = useState([]);
  const [currentSlide, setCurre] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      const response = await fetch(getUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return <div></div>;
}

//check if url is empty
