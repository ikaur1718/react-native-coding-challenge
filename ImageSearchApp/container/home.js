import React from 'react';
import axios from 'axios';
// import HomeNavigator from './Images.js';

// import {createStackNavigator, createAppContainer} from 'react-navigation';
import Images from './Images.js';

import { 
  Image,
  StyleSheet, 
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

// const ImagesContext = React.createContext('flowers');
// const HomeContainer = createAppContainer(HomeNavigator);


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Search Image',
      images: []
    }
    this.search = this.search.bind(this);
  }

  componentDidMount() {
  }

  search(query) {
    axios.get(`https://pixabay.com/api/?key=11621806-eee353325e4c7ff80bd98e608&q=${query}&image_type=photo`)
    .then((response) => {
      this.setState({images: response.data.hits});
    })
    .catch((err) => {
      console.error("Error:", err)
    });  
  }



  render() {
    if(this.state.images.length === 0) {
      return (
        <View style={styles.container}>
          <Image source={require('../img/Pixabay-logo.png')} />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '50%'}}
            placeholder={this.state.text}
            onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
          />
          <Button 
            color="#841584" 
            title="Search"
            onPress={() => {this.search(this.state.text)}}
          />

        </View>
      );
    } else {
      return (
        // <ImagesContext.Provider value={this.state.images}>
        //   <HomeNavigator/>
        // </ImagesContext.Provider>
        // <Images images={this.state.images}/>
        <View>
            {this.props.navigation.navigate('Results', {images: this.state.images})}
            {/* {this.props.navigation.navigate('Results', {...this.state.images})} */}
          {/* <Text>{this.state.images[0].imageHeight}</Text>
          <Image source={this.state.images[0].previewURL}></Image> */}
        </View>
      );
    }
  }
};

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

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: Home
//   },
//   // Results: {
//   //   screen: Images
//   // },

// });

// export default createAppContainer(AppNavigator);
