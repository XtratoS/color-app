import React from 'react';
import Header from './Header';
import ColorChanger from './ColorChanger';

function App() {
  return (
    <>
      <Header
        title="Custom Title"
        description="Custom Description"
      />
      <ColorChanger />
    </>
  );
}

export default App;
