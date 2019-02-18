import React from 'react';
import { 
  Image,
  StyleSheet,
  Text,
  View, 
  Button,
} from 'react-native';

export default class ImageDetails extends React.Component {


  render() {
    const {params} = this.props.navigation.state;

    return (
      <View style={styles.container}>
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
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
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




