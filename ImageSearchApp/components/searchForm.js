import React from 'react';
import {  
  TextInput, 
  Button,
  View,
  StyleSheet, 
} from 'react-native';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFor:'',
    }
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(searchFor) {
    this.setState({
      searchFor
    });
    this.props.onTextChange(this.state.searchFor)
  }

  render() {
    return(
      <View> 
        <TextInput
          placeholder="Enter something to search for!"
          style={styles.textInputStyles}
          onChangeText={this.handleTextChange}
          value={this.state.searchFor}
        />

        <Button 
          color="#841584" 
          title="Search"
          onPress={() => this.props.onPressSearch(this.state.searchFor)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyles: {
    height: 40,
    borderColor: '#FFF',
    borderWidth: 1,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
});
