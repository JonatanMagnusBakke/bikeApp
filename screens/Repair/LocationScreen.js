import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import MapView from 'react-native-maps';


export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    });
  };

class LocationScreen extends React.Component {
    static navigationOptions = {
        title: 'Locaiton',
    };
    constructor(props) {
        super(props);
        this.state = {
          region: {
              latitude: 55.676098,
              longitude: 12.568337,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
          },
        };
      }

    componentDidMount() {
        return getCurrentLocation().then(position => {
          if (position) {
            this.setState({
              region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003,
              },
            });
          }
        });
    }

    render() {
        return (
            <View style={styles.container}>
            <Text>Hej</Text>
                <MapView style={styles.map}
                    region={this.state.region}
                    showsUserLocation={true} 
                    showsMyLocationButton={true}
                >

                </MapView>
            </View>
                
        );
    }
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});
export default LocationScreen;