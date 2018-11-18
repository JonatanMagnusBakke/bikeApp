import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
	Button
} from 'react-native';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

export default class TestProject2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			statusBarHeight: 400
		}
	}

	componentWillMount() {
		setTimeout(() => this.setState({ hackHeight: height }), 500);
		setTimeout(() => this.setState({ hackHeight: height - 300 }), 1000);
	}
	render() {
		return (
			<View style={{ paddingBottom: this.state.hackHeight }}>
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
				<TouchableOpacity >
					<View style={styles.listItem}>
						<Text style={styles.name}>Test</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject
	},
	map: {
		height: 200
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
