import React, { Component } from 'react';
import { Text, TouchableOpacity, View ,StyleSheet} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
 
export default class DateTimePickerTester extends Component {
  state = {
    isDateTimePickerVisible: false,
    isTimePickerVisible: false,
    dateField: 'Date',
    timeField: 'Time'
  };
 
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _showTimePicker = () => this.setState({ isTimePickerVisible: true });
 
  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });
 

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date.toLocaleDateString());
    this.setState({dateField: date.toLocaleDateString()})
    this._hideDateTimePicker();
  };

  _handleTimePicked = (time) => {
    console.log('A date has been picked: ', time.getHours() + ':' + time.getMinutes());
    this.setState({timeField: time.getHours() + ':' + time.getMinutes()})
    this._hideTimePicker();
  };
 
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.listItem} onPress={this._showDateTimePicker}>
          <Text style={styles.name}>{this.state.dateField}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} onPress={this._showTimePicker}>
          <Text style={styles.name}>{this.state.timeField}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode='date'
        />
        <DateTimePicker
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this._handleTimePicked}
          onCancel={this._hideTimePicker}
          mode='time'
          is24Hour={true}
        />
      </View>
    );
  }
 
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
	},
	name: {
		textAlign: "center",
		color: '#666',
		fontWeight: 'bold',
		fontSize: 20
	},
	listItem: {
		marginTop: 10,
		paddingTop: 15,
		paddingBottom: 15,
		marginLeft: 30,
		marginRight: 30,
		backgroundColor: '#EEEEEE',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#fff'
	},
});