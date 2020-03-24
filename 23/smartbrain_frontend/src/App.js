import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';

import './App.css';

import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Rank from './Components/Rank/Rank';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';

const app = new Clarifai.App({
  apiKey: 'YOUR API KEY HERE'
})

const particlesOptions = {
  particles: {
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

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      //notice that route is used instead of react-router
      route: 'signin',
      isSignedIn: false
    }
  }

  calcFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });

  }

  onButtomSubmit = (event) => {
    event.preventDefault();
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        // URL
        this.state.input
      )
      .then(response => this.displayFaceBox(this.calcFaceLocation(response)))
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false});
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, box} = this.state;
    return (
      <div className="App" >
        <Particles className="particles"
          params={particlesOptions}
        />
        <Navigation 
          isSignedIn = {isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === 'home'
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtomSubmit}
              />
              <FaceRecognition
                box={box}
                imageUrl={imageUrl}
              />
            </div>
          : (
            route === 'signin' ? 
            <SignIn onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    )
  }
}