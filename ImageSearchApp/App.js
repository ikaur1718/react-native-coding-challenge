
import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './container/home.js';
import Images from './container/Images.js';
import ImageDetails from './container/ImageDetails';

const GlobalContext = React.createContext({images: []});

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

class GlobalContextProvider extends React.Component {
  state = {
    images: [],
  }

  render () {
    return (
      <GlobalContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

// create the consumer as higher order component
const withGlobalContext = ChildComponent => props => (
  <GlobalContext.Consumer>
    {
      context => <ChildComponent {...props} global={context}  />
    }
  </GlobalContext.Consumer>
);

export default class App extends Component {

  render() {
    return (
      <GlobalContextProvider>
        <AppContainer/>
      </GlobalContextProvider>
    );
  }
}