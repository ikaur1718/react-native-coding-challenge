import React from 'react';
import axios from 'axios';
import SearchForm from '../components/searchForm.js';
import PIXABAY_API_KEY from '../config.js';
import Context from '../components/GlobalContextProvider.js';
// const Context = React.createContext();
// const {Provider, Consumer} = React.createContext();
const URL = `https://pixabay.com/api/`;

import { 
  Image,
  StyleSheet, 
  View,
} from 'react-native';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Search Image',
      images: [],
      page: 1,
      perPage: 15,
    }
    this.search = this.search.bind(this);
  }


  search(query) {
    axios.get(`${URL}?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&page=${this.state.page}&per_page=${this.state.perPage}`)
    .then((response) => {
      this.handleContextChange(response.data.hits);
    })
    .catch((err) => {
      console.error("Error:", err)
    });  
  }

  handleContextChange = (images) => {
    // console.log()
    // handleChange(images);
    this.setState({
      images
    }, () => {
        if(this.state.images.length > 0) {
          this.props.navigation.navigate('Results', {images: this.state.images})
          // this.props.navigation.navigate('Results');
        } 

    });

  }

  onTextChange = (textArgs) => {
    this.setState({
      text: textArgs
    })
  }


  render() {

    // const contextValue = {
    //   data: this.state.images,
    //   handleChange: this.handleContextChange
    // }
      return (
        <Context.Consumer >
          {({data, handleChange}) => (

            <View style={styles.container}>
              <Image source={require('../img/Pixabay-logo.png')} />
              <SearchForm 
                onPressSearch={this.search} 
                onTextChange={this.onTextChange} 
              />
            </View>
          )}
        </Context.Consumer>
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


