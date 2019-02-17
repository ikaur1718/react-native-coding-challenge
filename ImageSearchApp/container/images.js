import React from 'react';
import axios from 'axios';

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


  // static contextType = ImagesContext; 

  render() {
    const { navigation } = this.props;
    const images = navigation.getParam('images', []);
    return (
      
      <View>
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
          {/* <FlatList>
            data={this.props.images.hits}
            renderItem={({item}) => <ListItem style={styles.listItem} imageClicked={this._imageClicked} item={item}/>} 
          </FlatList> */}
          {/* <View style={styles.container} onLayout={this._onLayout}>
            {this.images.map((image) => {
              <Image source={{uri: image.webformatURL}} style={{width: 100, height: 100}}></Image>

            })} */}
            <Image source={{uri: images[0].webformatURL}} style={{width: '40%', height: '40%'}} onPress={this.props.navigation.navigate('ImageDetail', {image:images[0]})}></Image>

          {/* </View> */}
          <Text>{JSON.stringify(images[0].imageHeight)}</Text>
        {/* {this.context.images.hits.length !== 0 ?
        (<View style={styles.container} onLayout={this._onLayout} >
          <FlatList>
            data={this.context.images.hits}
          </FlatList>
        </View>)
          : (<Text> 
            No results found.
          </Text>)} */}
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
  }
});
