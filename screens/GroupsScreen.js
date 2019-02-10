import React from 'react';
import { ScrollView, StyleSheet, FlatList, View, Text, Image  } from 'react-native';
import { Card, ListItem, Button, Icon  } from 'react-native-elements'

export default class GroupsScreen extends React.Component {
  static navigationOptions = {
    title: 'Groups',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card
          title='Try Pomodoro!'
          image={require('../assets/images/flower.jpg')}>
          <Text style={{marginBottom: 10}}>
            Pomodoro is a technique used to help productivity
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            onPress={() => this.props.navigation.navigate('Chatbot')}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Discuss' />
        </Card>
        <Card
          title='Try Letters of Gratitude'
          image={require('../assets/images/robot-dev.png')}>
          <Text style={{marginBottom: 10}}>
            Letters of gratitude help ...
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            onPress={() => this.props.navigation.navigate('Chatbot')}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Discuss' />
        </Card>
        <Card
          title='Try A Morning Jog'
          image={require('../assets/images/robot-prod.png')}>
          <Text style={{marginBottom: 10}}>
            Morning jogs help you increase your energy levels and awake during the day
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            onPress={() => this.props.navigation.navigate('Chatbot')}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Discuss' />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
