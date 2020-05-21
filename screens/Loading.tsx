import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { getUniqueId } from 'react-native-device-info' 
import RNLocation from 'react-native-location'

import { database } from '../database'

interface ILoadingProps {
    loadingFinished: (location:any) => void;
}

export class Loading extends Component<ILoadingProps, {}> {
    
    constructor(props:ILoadingProps) {
        super(props);

        RNLocation.configure({
            distanceFilter: 50,
            desiredAccuracy: {
                ios: "best",
                android: "balancedPowerAccuracy"
            }
        })

        RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
                detail: "coarse"
            }
        }).then( granted => {
            if (granted) {
                RNLocation.subscribeToLocationUpdates(locations => {
                    console.log("location read: ", locations)
                    props.loadingFinished(locations);
                /* Example location returned
                {
                    speed: -1,
                    longitude: -0.1337,
                    latitude: 51.50998,
                    accuracy: 5,
                    heading: -1,
                    altitude: 0,
                    altitudeAccuracy: -1
                    floor: 0
                    timestamp: 1446007304457.029,
                    fromMockProvider: false
                }
                */
                })
            } else {
                console.log("isn't granted for location")
            }
        })

    }

    getHashedIdOfDevice = async () => {
        const encodedId = new TextEncoder().encode(getUniqueId())
        await crypto.subtle.digest('SHA-256', encodedId);

    }

    render() {
        return (
        <View>
            <Text>Loading</Text>
        </View>
        )
    }
}