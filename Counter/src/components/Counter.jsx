import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  const [values, setValues] = useState({
    successRate: 0,
    completionRate: 0,
    satisfactionRate: 0,
  });

  const counterRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());

  useEffect(() => {
    // Initial animation from 0 to 10
    const timer = setInterval(() => {
      setValues((prevValues) => {
        const newValues = { ...prevValues };
        for (let key in newValues) {
          if (newValues[key] < 10) {
            newValues[key] = Math.min(newValues[key] + 1, 10);
          }
        }
        if (Object.values(newValues).every((value) => value >= 10)) {
          clearInterval(timer);
        }
        return newValues;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  const handleScroll = () => {
    if (counterRef.current) {
      const rect = counterRef.current.getBoundingClientRect();
      const isInView =
        rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isInView) {
        const currentScrollY = window.scrollY;
        const currentTime = Date.now();
        const scrollSpeed =
          Math.abs(currentScrollY - lastScrollY.current) /
          (currentTime - lastScrollTime.current);
        const scrollDirection =
          currentScrollY > lastScrollY.current ? 'down' : 'up';

        setValues((prevValues) => {
          const newValues = { ...prevValues };
          for (let key in newValues) {
            if (scrollDirection === 'down') {
              newValues[key] += Math.round(scrollSpeed * 10);
            } else {
              // If we're at the top of the page, reset to 10
              if (window.scrollY === 0) {
                newValues[key] = 10;
              } else {
                newValues[key] = Math.max(
                  10,
                  newValues[key] - Math.round(scrollSpeed * 10)
                );
              }
            }
          }
          return newValues;
        });

        lastScrollY.current = currentScrollY;
        lastScrollTime.current = currentTime;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={counterRef}
      className='flex flex-col justify-center items-center min-h-screen px-40'
    >
      <div className='flex justify-center items-center gap-20'>
        <div className='text-center border-2 border-red-500 p-4'>
          <h2 className='text-6xl font-bold text-[#4285F4]'>
            <CountUp
              start={values.successRate - 1}
              end={values.successRate}
              duration={0.5}
              preserveValue
            />
          </h2>
          <p className='py-2 text-[#DB4437] font-medium'>
            Success Rate
          </p>
        </div>
        <div className='text-center border-2 border-red-500 p-4'>
          <h2 className='text-6xl font-bold text-[#0F9D58]'>
            <CountUp
              start={values.completionRate - 1}
              end={values.completionRate}
              duration={0.5}
              preserveValue
            />
          </h2>
          <p className='py-2 text-[#F4B400] font-medium'>
            Completion Rate
          </p>
        </div>
        <div className='text-center border-2 border-red-500 p-4'>
          <h2 className='text-6xl font-bold text-[#DB4437]'>
            <CountUp
              start={values.satisfactionRate - 1}
              end={values.satisfactionRate}
              duration={0.5}
              preserveValue
            />
          </h2>
          <p className='py-2 text-[#4285F4] font-medium'>
            Satisfaction Rate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
