import React, {Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

export default class About extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Profile', {
      name: 'Nalia Pascual'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> About </Text>
        <Button
            title="Ir al profile"
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