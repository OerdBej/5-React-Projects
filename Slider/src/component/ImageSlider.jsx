import { useEffect, useState } from 'react';
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from 'react-icons/bs';

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    try {
      setLoading(true);
      const response = await fetch(
        `${url}?page=${page}&limit=${limit}`
      );
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(
      currentSlide === 0 ? images.length - 1 : currentSlide - 1
    );
  }

  function handleNext() {
    setCurrentSlide(
      currentSlide === images.length - 1 ? 0 : currentSlide + 1
    );
  }

  useEffect(() => {
    if (url) fetchImages();
  }, [url, page, limit]);

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred! {errorMsg}</div>;
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '80%',
        margin: 'auto',
        overflow: 'hidden',
      }}
    >
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          fontSize: '2rem',
          cursor: 'pointer',
          zIndex: 10,
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'relative',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.author}
                src={imageItem.download_url}
                style={{
                  width: '100%',
                  flexShrink: 0,
                  height: '400px',
                  objectFit: 'cover',
                  transition:
                    'opacity 0.5s ease, visibility 0.5s ease',
                  opacity: currentSlide === index ? 1 : 0,
                  visibility:
                    currentSlide === index ? 'visible' : 'hidden',
                }}
              />
            ))
          : null}
      </div>
      <BsArrowRightCircleFill
        onClick={handleNext}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          fontSize: '2rem',
          cursor: 'pointer',
          zIndex: 10,
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
        }}
      >
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                style={{
                  width: '10px',
                  height: '10px',
                  margin: '0 5px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor:
                    currentSlide === index ? '#333' : '#ccc',
                  cursor: 'pointer',
                }}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </div>
    </div>
  );
}
