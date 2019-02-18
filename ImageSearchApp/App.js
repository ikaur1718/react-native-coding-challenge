
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



