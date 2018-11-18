import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Bike Fix App</Text>
      <TextInput style={styles.listItem}>Username</TextInput>
      <TextInput style={styles.listItem} secureTextEntry={true}>Password</TextInput>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
          <View style={styles.login}>
          <Text style={styles.name}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    backgroundColor: '#fff',
  },
  login: {
      textAlign: 'center',
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor: '#25dd97',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 20
  },
  listItem: {
    textAlign: 'center',
  marginTop:10,
  paddingTop:15,
  paddingBottom:15,
  marginLeft:30,
  marginRight:30,
  backgroundColor:'#EEEEEE',
  borderRadius:20,
  borderWidth: 1,
  borderColor: '#fff',
  fontSize: 20
},
name: {
  paddingLeft: 12,
  color: '#666',
  fontWeight: 'bold',
  fontSize: 20, textAlign: 'center'
}, 
header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 100
}
});
