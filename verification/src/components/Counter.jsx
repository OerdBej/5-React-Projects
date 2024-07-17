import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div className='px-40'>
      <div className='grid grid-cols-3 text-center pt-80 gap-40'>
        <div>
          <h2 className='text-6xl font-bold text-[#262626]'>
            <CountUp start={0} end={40} delay={1} />%
          </h2>
          <p className='py-2 text-[#595959] font-medium'>
            Success Rate
          </p>
        </div>
        <div>
          <h2 className='text-6xl font-bold text-[#262626]'>
            <CountUp start={20} end={55} delay={1.3} />%
          </h2>
          <p className='py-2 text-[#595959] font-medium'>
            Completion Rate
          </p>
        </div>
        <div>
          <h2 className='text-6xl font-bold text-[#262626]'>
            <CountUp start={10} end={75} delay={1.5} />%
          </h2>
          <p className='py-2 text-[#595959] font-medium'>
            Satisfaction Rate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
