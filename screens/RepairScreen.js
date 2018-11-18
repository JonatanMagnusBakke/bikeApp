import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';


export default class RepairScreen extends React.Component {
  static navigationOptions = {
    title: 'Instant Repair',
  };
  constructor(props)
  {
    super(props);

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Location')}>
          <View style={styles.listItem}>
          <Text style={styles.name}>Next</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  listItem: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#EEEEEE',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#fff'
  },
name: {
  paddingLeft: 12,
  color: '#666',
  fontWeight: 'bold',
  fontSize: 20
}
});



