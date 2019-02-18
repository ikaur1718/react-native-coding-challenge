
import React from 'react';
import axios from 'axios';
import ListItem from '../components/ListItem.js';
import SearchForm from '../components/searchForm.js'
import PIXABAY_API_KEY from '../config.js';
const URL = `https://pixabay.com/api/`;


import { 
  Button, 
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View, 
  TextInput
} from 'react-native';

// import {createStackNavigator, createAppContainer} from 'react-navigation';


export default class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfColumns: 2,
      text: 'Search Image',
      image: '',
      page: 1,
      perPage: 15,
    }
    this.search = this.search.bind(this);
    // this.imageClicked = this.imageClicked.bind(this);
  }

  search(query) {
    axios.get(`${URL}?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&page=${this.state.page}&per_page=${this.state.perPage}`)
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



  _imageClicked = (item) => {
    this.props.navigation.navigate('ImageDetail', {...item});
  }

  _renderResults(images) {
    const flatListKey = this.state.numberOfColumns <= 2 ? 'h' : 'v';

    return images.length !== 0 ?
      (<FlatList
        key={(flatListKey)}
        contentContainerStyle={styles.list}
        keyExtractor={item => item.id}
        data={images}
        onEndReachedThreshold={0.5}
        numColumns={this.state.numberOfColumns}
        renderItem={({item}) => <ListItem style={styles.listItem} imageClicked={this._imageClicked} item={item}/>} 
      />) : (
        <Text> 
          No results found.
        </Text>
    );
  }


  render() {
    const { navigation } = this.props;
    const images = navigation.getParam('images', []);
    return (
      
      <View style={styles.container} >
        <SearchForm style={{flexDirection: 'row'}}
          onPressSearch={this.search} 
          onTextChange={this.onTextChange}
          value={this.state.text}
        /> 
        {this._renderResults(images)}
          {/* {images.map((image) => {
            return (
            <Image source={{uri: image.previewURL}} style={styles.imageSize} onPress={() => this.imageClicked(image)}></Image>
          )})} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  list: {
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  listItem: {
    margin: 5,
    backgroundColor: '#CCC',
  },
  imageSize: {
    width: 100,
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});

