import React, { Component } from 'react'
import { View } from 'react-native'
import { Circle } from 'react-native-maps'

interface IMapViewCircleProps {
  locationOfCircle:any
}

export class MapViewCircle extends Component<IMapViewCircleProps, {}> {
  constructor(props: IMapViewCircleProps) {
    super(props);
    
  }

  render() {
    return(
      <Circle 
        center={ {latitude: this.props.locationOfCircle.latitude, longitude: this.props.locationOfCircle.longitude }}
        radius={5}
        fillColor={"#FF0000"}
      />
    )
  }
}