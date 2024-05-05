import React from 'react';
import Search from './modules/search/index';
import AppProvider from './store/store';

function App() {
  return (
    <AppProvider>
      <div className='most-outer-wrapper'><Search /></div>
    </AppProvider>
  );
}

export default App;
