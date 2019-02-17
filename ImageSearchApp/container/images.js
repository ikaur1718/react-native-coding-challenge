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

  // static contextType = ImagesContext; 

  render() {
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
          <Image source={this.props.images}></Image>
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

// const HomeNavigator = createStackNavigator({
//   Results: {
//     screen: Images
//   },

// });

// export default createAppContainer(HomeNavigator);
