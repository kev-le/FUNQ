import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { Button, CheckBox } from 'react-native-elements';
import Modal from 'react-native-modal';

export default class LandingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    isModalVisible: false,
    goal1: false,
    goal2: false,
    goal3: false,
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <ImageBackground source={require('../assets/images/background-2.jpeg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.getStartedText}>Good Afternoon, Cathy</Text> 
              <TouchableOpacity onPress={this._toggleModal}>
                <Text>View Weekly Goals</Text>
              </TouchableOpacity>
              <Image
                source={
                  __DEV__
                    ? require('../assets/images/leaf.png')
                    : require('../assets/images/robot-prod.png')
                }
                style={styles.welcomeImage}
              />
            </View>

            <View style={styles.helpContainer}>
              <Button
              onPress={() => this.props.navigation.navigate('Chatbot')}
              title='Discuss the Pomodoro technique'
              style={{width: 300, marginTop: 20, opacity:0.7}} />
              <Button
              onPress={() => this.props.navigation.navigate('Chatbot')}
              title='Discuss letters of gratitude'
              style={{width: 300, marginTop: 20, opacity: 0.5}}
              buttonStyle={{backgroundColor: 'red'}}/>
              <Button
              onPress={() => this.props.navigation.navigate('Chatbot')}
              title='Discuss a morning jog'
              style={{width: 300, marginTop: 20, opacity:0.7}} />
            </View>
          </ScrollView>
        </View>
        <Modal isVisible={this.state.isModalVisible} style={styles.modal} onBackdropPress={() => this.setState({ isVisible: false })} >
          <View style={{ flex: 1 }}>
            <Text style={styles.getStartedText}>Your Weekly Goals</Text>
            <CheckBox
              title='Drink an average of 3 cups of water a day'
              checked={this.state.goal1}
              onPress={() => this.setState({ goal1: !this.state.goal1})}
            />
            <CheckBox
              title='Get at least two hours of exercise this week'
              checked={this.state.goal2}
              onPress={() => this.setState({ goal2: !this.state.goal2})}
            />
            <CheckBox
              title='Get consistent sleep'
              checked={this.state.goal3}
              onPress={() => this.setState({ goal3: !this.state.goal3})}
            />
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Button
                onPress={this._toggleModal}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Done' />
            </View>
          </View>
        </Modal>
      </ImageBackground>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    maxHeight: 500,
    marginTop: 150,
  },
  container: {
    flex: 1,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    zIndex: 1,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  welcomeImage: {
    zIndex: -1,
    width: 200,
    height: 300,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    marginTop: 50,
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 50,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
