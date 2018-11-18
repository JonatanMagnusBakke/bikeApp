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
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'My Profile',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Morgan Freeman</Text>
        <Image
          style={styles.fileImage}
          source={{ uri: 'https://cdn.abcotvs.com/dip/images/3540305_053018-cc-morgan-freeman-img.jpg?w=630' }}
        />
        <Text style={styles.headerStyle2}>Repairs</Text>
        <TouchableOpacity >
          <View style={styles.listItem}>


            <Text style={styles.name}>Repair1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.listItem}>


            <Text style={styles.name}>Repair2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.listItem}>


            <Text style={styles.name}>Repair3</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  headerStyle: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '100',
    marginBottom: 24
  },
  headerStyle2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '100',
    marginTop: 30
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
  fileImage: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderWidth: 1,
    borderRadius: 100
  },
  name: {
    paddingLeft: 12,
    color: '#666',
    fontWeight: 'bold',
    fontSize: 20
  }
});
