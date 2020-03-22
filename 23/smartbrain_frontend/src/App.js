import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';

import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';

const particlesOptions = {
  particles: {
    // number: {
    //   value: 25,
    //   density: {
    //     enable: true,
    //     value_area: 800
    //   }
    // }
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9d1",
        blur: 5
      }
    }
  }
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*
        <FaceRecognition /> */}
      </div>
    )
  }
}

