import React from 'react';
import axios from 'axios';

import {createStackNavigator, createAppContainer} from 'react-navigation';

import { 
  Image,
  StyleSheet, 
  Text,
  View,
  TextInput,
} from 'react-native';



class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Search Image',
      images: {}
    }

    this.renderImages = this.renderImages.bind(this);
  }

  componentDidMount() {
    axios.get('https://pixabay.com/api/?key=11621806-eee353325e4c7ff80bd98e608&q=yellow+flowers&image_type=photo')
      .then((response) => {
        this.setState({images: response.data});
        console.log("Hello this is response", response);
      })
      .catch((err) => {
        console.error("Error:", err)
      });  
  }

  renderImages() {
    return <Text>
      {this.state.images.totalHits};
    </Text>

  };


  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/Pixabay-logo.png')} />
        {this.renderImages()}
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '50%'}}
          placeholder={this.state.text}
          onChangeText={(text) => this.setState({text})}
          onBlur={this.search}
          // value={this.state.text}
        />

      </View>
    );
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

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
});

export default createAppContainer(AppNavigator);
