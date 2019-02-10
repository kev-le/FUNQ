import React from 'react';
import { ScrollView, StyleSheet, FlatList, View, Text, Image, ImageBackground  } from 'react-native';
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return(
      <ImageBackground source={require('../assets/images/background-2.jpeg')} style={{width: '100%', height: '100%'}}>
        <ScrollView style={styles.container}>
          <View style={styles.image_view}>
            <Avatar rounded title="MD" size="xlarge"  />
          </View>
          <Text style={styles.myProfileText}>Cathy Ruthsworth</Text>
          <View style={styles.profileImageView}>
            <Image
              source={require('../assets/images/web.png')}
              style={styles.profileImage}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
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
    marginTop: 50,
  },
  profileImage: {
    width: 300,
    height: 300,
  },
  profileImageView: {
    alignItems: 'center',
    marginTop: -10,
  }
});

