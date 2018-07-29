import React, {Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> About </Text>
        <Button
            title="Ir al profile"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})