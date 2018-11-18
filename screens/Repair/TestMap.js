import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class TestProject2 extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            statusBarHeight: 400
        }
    }

    componentWillMount() {
        //Hack to ensure the showsMyLocationButton is shown initially. Idea is to force a repaint
       setTimeout(()=>this.setState({statusBarHeight: 300}), 500);
    }
	render() {
		return (
            <View style={{paddingTop: this.state.statusBarHeight }}>
				<MapView style={styles.map}
					provider="google"
					showsUserLocation={true}
					showsMyLocationButton={true}
					showsCompass={true}
					followsUserLocation={true}
					loadingEnabled={true}
					toolbarEnabled={true}
					zoomEnabled={true}
                    rotateEnabled={true}
                    zoomControlEnabled={true}

					initialRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				/>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: 'gray',
	},
	map: {
		...StyleSheet.absoluteFillObject
	},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
