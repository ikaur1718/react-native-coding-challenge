
import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './container/home.js';
import Images from './container/Images.js';
import ImageDetails from './container/ImageDetails';



const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Results: {
    screen: Images
  }, 
  ImageDetail: {
    screen: ImageDetails
  },  
 
  
}, {
  initialRouteName: 'Home',
});



const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {
    return (
      <AppContainer/>
    );
  }
}