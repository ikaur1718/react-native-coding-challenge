import React from 'react';
import { 
  Image,
  StyleSheet,
  Text,
  View, 
} from 'react-native';

export default class ImageDetails extends React.Component {

  // _onPressSearch = () => {
  //   let query = this.props.searchForm.text;
  //   this.props.fetchImages(query);
  // }

  render() {
    const { navigation } = this.props;
    const image = navigation.getParam('image', {});
    // const {params} = this.props.navigation.state;

    return (
      // <View style={styles.container}>
      //   <Image 
      //     source={{uri: params.webformatURL}}  
      //     style={{flex:0, width:300, height: 300}}
      //   /> 
      //   <Text> Uploaded by: {params.user} </Text> 
      //   <Text> Tags: {params.tags} </Text> 
      //   <Text> Resolution: {params.imageHeight}x{params.imageWidth} </Text> 
      // </View>
      <View style={styles.container}>
        <Image 
          source={{uri: image.webformatURL}}  
          style={{flex:0, width:300, height: 300}}
        /> 
        <Text> Uploaded by: {image.user} </Text> 
        <Text> Tags: {image.tags} </Text> 
        <Text> Resolution: {image.imageHeight}x{image.imageWidth} </Text> 
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

// const mapStateToProps = state => (state);

// export default connect(() => mapStateToProps, {})(ImageDetail);
