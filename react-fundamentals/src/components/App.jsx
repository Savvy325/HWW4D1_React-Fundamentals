import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import ImageOne from './ImageOne';
import ImageTwo from './ImageTwo';
import ImageThree from './ImageThree';

function App() {

  return (
    <>
      <div>
          <Header/>
          <About/>
          <Contact/>
          <h1>Image Gallery</h1>
          <ImageOne />
          <ImageTwo />
          <ImageThree />
      </div>

    </>
  )
}

export default App
