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
      <Text>This is the </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Location')}>
          <View style={styles.listItem}>
          <Text style={styles.name}>Next</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Test')}>
          <View style={styles.listItem}>
          <Text style={styles.name}>Test</Text>
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
    backgroundColor: '#EEEEEE',
    padding: 12,
    marginBottom: 1,
    flexDirection: 'row',
    alignItems: "center"
},
name: {
  paddingLeft: 12,
  color: '#666',
  fontWeight: 'bold',
  fontSize: 20
}
});



