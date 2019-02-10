import React from 'react';
import { ScrollView, StyleSheet, FlatList, View, Text, Image, ImageBackground  } from 'react-native';
import { Card, ListItem, Button, Icon  } from 'react-native-elements'

export default class GroupsScreen extends React.Component {
  static navigationOptions = {
    title: 'Groups',
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/background-2.jpeg')} style={{width: '100%', height: '100%'}}>
        <ScrollView style={styles.container}>
        <Card
            style={styles.cardStyle}
            title='7-8-4 Breathing'
            image={require('../assets/images/robot-prod.png')}>
            <Text style={{marginBottom: 10}}>
              This breathing exercise provides a simple way to help alleviate stress
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              onPress={() => this.props.navigation.navigate('Chatbot')}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Discuss' />
          </Card>
          <Card
            title='Letters of Gratitude'
            image={require('../assets/images/leaf.png')}>
            <Text style={{marginBottom: 10}}>
              Letters of gratitude help provide deep insight...
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              onPress={() => this.props.navigation.navigate('Chatbot')}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Discuss' />
          </Card>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  cardStyle: {
    width: 30
  },
});
