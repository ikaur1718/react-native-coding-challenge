
import React from 'react';
import axios from 'axios';
import ListItem from '../components/ListItem.js';
import Context from '../components/GlobalContextProvider.js';
import PIXABAY_API_KEY from '../config.js';
const URL = `https://pixabay.com/api/`;

// import Consumer from './home';


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



export default class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfColumns: 2,
      page: 1,
      perPage: 15,
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
      <Context.Consumer>{({handleChange, data}) => (
        <View style={styles.container} >
          <View style={{flexDirection: 'row'}}>
            <Text>Your Search Results</Text>
          </View>
            {/* {this._renderResults(data)} */}

            {this._renderResults(images)}
        </View>
      )}
      </Context.Consumer>
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

