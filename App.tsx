import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home, Loading } from './screens'


interface IAppState {
  isLoading: boolean,
  location: any
}

export class App extends React.Component<{}, IAppState>{
  constructor(){
    super({})

    this.state = {
      isLoading: true,
      location: {}
    }

  }

  finishedLoading = (location:any) => {
    this.setState({ isLoading:false, location:location })
  }

  render(){

    if(this.state.isLoading) {
      <Loading loadingFinished={ this.finishedLoading.bind(this) }/>
    } else {
      <Home location={ location }/>
    }

    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
