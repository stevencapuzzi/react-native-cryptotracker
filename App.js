import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import { Provider } from 'react-redux';
import Store from './src/Store'
import { CryptoContainer } from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
      <View>
        <Header />
        <CryptoContainer />
      </View>
      </Provider>
    );
  }
}


