import React from 'react';
import { ScrollView, StyleSheet, FlatList, View, Text, Image, ImageBackground  } from 'react-native';
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'

export default class GroupMemberScreen extends React.Component {
  static navigationOptions = {
    title: 'GroupMember',
  };

  render() {
    return(
      <ImageBackground source={require('../assets/images/background-2.jpeg')} style={{width: '100%', height: '100%'}}>
        <ScrollView style={styles.container}>
          <View style={styles.image_view}>
            <Avatar rounded source={require('../assets/images/stress2.png')} size="xlarge"  />
          </View>
          <Text style={styles.myProfileText}>_VanGroove</Text>
          <View style={styles.profileImageView}>
            <Image
              source={require('../assets/images/web.png')}
              style={styles.profileImage}
            />
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              onPress={() => this.props.navigation.navigate('Chatbot')}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: -40}}
              title='Start a conversation' />
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  myProfileText: {
    marginTop: 0,
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 50,
    textAlign: 'center',
  },
  image_view: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 300,
    height: 300,
  },
  profileImageView: {
    alignItems: 'center',
    marginTop: -30,
  }
});

