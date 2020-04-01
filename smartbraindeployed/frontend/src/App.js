import React, { Component } from 'react';
import Particles from 'react-particles-js';

import './App.css';

import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Rank from './Components/Rank/Rank';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';

const particlesOptions = {
  particles: {
    number: {
      value: 100
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9d1",
        blur: 5
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  //notice that route is used instead of react-router
  route: 'signin',
  isSignedIn: false,
  user: {
    email:'',
    id: '',
    name: '',
    entries: 0,
    joined: ''
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
      isSignedIn: false,
      user: {
        email:'',
        id: '',
        name: '',
        entries: 0,
        joined: ''
      }
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

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });

  }

  onButtomSubmit = (event) => {
    event.preventDefault();
    this.setState({ imageUrl: this.state.input });
      fetch('https://immense-taiga-65869.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://immense-taiga-65869.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then( res => res.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries: count}));
          })
          .catch(err => console.log(err));
        }
        this.displayFaceBox(this.calcFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({initialState});
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
              <Rank 
                name = {this.state.user.name}
                entries = {this.state.user.entries}
              />
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
            <SignIn 
              loadUser = {this.loadUser}
              onRouteChange={this.onRouteChange} 
            />
            : <Register 
                loadUser = {this.loadUser}
                onRouteChange={this.onRouteChange} 
              />
          )
        }
      </div>
    )
  }
}