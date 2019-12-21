import React, { Component } from 'react';
import Navbar from './components/navbar';
import MainSlide from './components/showcase/mainSlide';
import ThirdSection from './components/showcase/ThirdSection';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainSlide />

        <ThirdSection />

        <Footer />


      </div>
    );
  }
}

export default App;
