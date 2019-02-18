import React from 'react';
import axios from 'axios';
import SearchForm from '../components/searchForm.js'
import PIXABAY_API_KEY from '../config.js'


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
      perPage: 10,
    }
    this.search = this.search.bind(this);
  }

  componentDidMount() {
  }

  search(query) {
    axios.get(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&page=${this.state.page}&per_page=${this.state.perPage}`)
    .then((response) => {
      this.setState({images: response.data.hits});
    })
    .catch((err) => {
      console.error("Error:", err)
    });  
  }

  onTextChange = (textArgs) => {
    this.setState({
      text: textArgs
    })
  }

  render() {
    if(this.state.images.length === 0) {
      return (
        <View style={styles.container}>
          <Image source={require('../img/Pixabay-logo.png')} />
          <SearchForm 
            onPressSearch={this.search} 
            onTextChange={this.onTextChange} 
          />
        </View>
      );
    } else {
      return (
        <View>
            {this.props.navigation.navigate('Results', {images: this.state.images})}
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

