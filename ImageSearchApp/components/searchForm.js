import React from 'react';
import {  
  TextInput, 
  Button,
  View, 
} from 'react-native';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',
    }
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(text) {
    this.setState({
      text
    });
    this.props.onTextChange(text);
  }

  render() {
    return(
      <View > 
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '50%'}}
          placeholder="Type your keywords here..."
          onChangeText={this.handleTextChange}
          // value={this.props.textValue}
        />

        <Button 
          color="#841584" 
          title="Search"
          // disabled={this.props.searchButtonDisabled}
          onPress={this.props.onPressSearch}
        />
      </View>
    );
  }
}
