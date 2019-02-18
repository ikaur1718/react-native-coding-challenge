
import React from 'react';
import axios from 'axios';
import ListItem from '../components/ListItem.js'

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
    }
    this.search = this.search.bind(this);
    // this.imageClicked = this.imageClicked.bind(this);
  }

  search(query) {
    axios.get(`https://pixabay.com/api/?key=11621806-eee353325e4c7ff80bd98e608&q=${query}&image_type=photo`)
    .then((response) => {
      this.setState({images: response.data});
    })
    .catch((err) => {
      console.error("Error:", err)
    });  
  }


  _onLayout = (e) => {
    const {width} = Dimensions.get('window')
    if (width <= 400) {
      this.setState({numberOfColumns: 2});
    } else if (width <= 568) {
      this.setState({numberOfColumns: 3});
    } else {
      this.setState({numberOfColumns: 4});
    }
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
      
      <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '50%'}}
            placeholder={this.state.text}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button 
            color="#841584" 
            title="Search"
            onPress={() => {this.search(this.state.text)}}
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

