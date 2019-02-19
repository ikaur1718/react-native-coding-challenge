import React from 'react';
import SearchForm from '../components/searchForm.js'
import axios from 'axios';
import PIXABAY_API_KEY from '../config.js'
const URL = `https://pixabay.com/api/`;

import { 
  Image,
  StyleSheet,
  Text,
  View, 
  Button,
} from 'react-native';

export default class ImageDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Search Image',
      images: [],
      page: 1,
      perPage: 15,
    }
    this.search = this.search.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
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



  render() {
    const {params} = this.props.navigation.state;

    return (
      <View style={styles.container}>
        {/* <View>
          <SearchForm style={{flexDirection: 'row'}}
              onPressSearch={this.search} 
              onTextChange={this.onTextChange} 
          />
        </View> */}
        <Image 
          source={{uri: params.webformatURL}}  
          style={{flex:0, width:300, height: 300}}
        /> 
        <Text> Uploaded by: {params.user} </Text> 
        <Text> Tags: {params.tags} </Text> 
        <Text> Resolution: {params.imageHeight}x{params.imageWidth} </Text> 
        <Text style={styles.baseText}>Posted by: {params.user}</Text>
        {/* <Text style={styles.baseText}>{params.tagsWithHash}</Text>
        <Text style={styles.baseText}>{params.views} views</Text>
        <Text style={styles.baseText}>{params.downloads} downloads</Text>
        <Text style={styles.baseText}>{params.favorites} favorites</Text>
        <Text style={styles.baseText}>{params.comments} comments</Text> */}
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate('Home', {images: ''})}
        />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




