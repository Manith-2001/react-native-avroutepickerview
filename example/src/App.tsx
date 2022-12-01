import React from 'react';
import { StyleSheet, View } from 'react-native';
import AVRoutePickerView from '../../src';

export default function App() {
  return (
    <View style={styles.container}>
      <AVRoutePickerView
        style={styles.avRoutePicker}
        color="white"
        activeColor="green"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  avRoutePicker: {
    flex: 1,
    width: 42,
    height: 42,
  },
});
