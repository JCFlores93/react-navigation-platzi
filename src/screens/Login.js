import React, {Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class Login extends Component {
  handlePress = () => {
    //this.props.navigation.navigate('About')
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'About'
      })
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Login </Text>
        <Button
            title="Ir al About"
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