import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Profile extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile </Text>
        <Button
            title="Ir al Home"
            onPress={this.handlePress}
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