
import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './container/home.js';
import Images from './container/Images.js';
import ImageDetails from './container/ImageDetails';
import Context from './components/GlobalContextProvider';

// const GlobalContext = React.createContext({
//   data:[],
//   handleChange: () => {}
// });

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

// class GlobalContextProvider extends React.Component {
//   state = {
//     images: [],
//     handleChange:() => {}
//   }

//   render () {
//     return (
//       <GlobalContext.Provider
//         value={{
//           images: this.state.images,
//         }}
//       >
//         {this.props.children}
//       </GlobalContext.Provider>
//     )
//   }
// }

//  const GlobalContextConsumer = GlobalContext.Consumer;
// create the consumer as higher order component
// const withGlobalContext = ChildComponent => props => (
//   <GlobalContext.Consumer>
//     {
//       context => <ChildComponent {...props} global={context}  />
//     }
//   </GlobalContext.Consumer>
// );

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
    }
    this.handleContextChange = this.handleContextChange.bind(this);
  }

  handleContextChange(images) {
    this.setState({
      images
    })
  }

  render() {
    const contextValue = {
      data: this.state.images,
      handleChange: this.handleContextChange
    }

  
    return (
      <Context.Provider value={contextValue}>

        <AppContainer/>
      </Context.Provider>
    );
  }
}