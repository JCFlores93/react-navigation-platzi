import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Profile extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Home')
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title:`${navigation.getParam('name')} ${navigation.getParam('age', 25)}` 
    }
  }

  setParams = () => {
    this.props.navigation.setParams({
      name: 'Jean Flores'
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile </Text>
        <Button
            title="Ir al Home"
            onPress={this.handlePress}
        />
        <Button
            title="Cambiar nombre"
            onPress={this.setParams}
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