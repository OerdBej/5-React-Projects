import React from 'react';
import HomePage from '../src/components/HomePage';
import Counter from '../src/components/Counter';
import Footer from '../src/components/Footer';
import Text from './components/Text';

const App = () => {
  return (
    <div>
      <HomePage />
      <Text />
      <Counter />
      <Footer />
    </div>
  );
};

export default App;
