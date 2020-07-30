import React from 'react';
import Navbar from './Components/Navbar';
import CopyWriter from './Components/CopyWriter';
import UxWriting from './Components/UxWriting';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
     <CopyWriter />
     <UxWriting />
     <Footer />
    </div>
  );
}

export default App;
