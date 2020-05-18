import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';

interface IMapProps {
  location:any
}

export class Home extends Component<IMapProps, {}> {
  constructor(props: IMapProps) {
    super(props);
    

  }

  render() {
    return (
      <View>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    )
  }
}