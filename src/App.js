import React from 'react';
import Search from './modules/search/index';
import AppProvider from './store/store';

function App() {
  return (
    <AppProvider>
      <div><Search /></div>
    </AppProvider>
  );
}

export default App;
