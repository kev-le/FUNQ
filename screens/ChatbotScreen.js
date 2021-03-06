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
import { Header, Button } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';

export default class ChatbotScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  

  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 5,
          text: 'Yeah, it was pretty hard to get started, but it really helped highlight the things I appreciate',
          createdAt: new Date(2019, 1, 10, 11, 31),
          user: {
            _id: 4,
            name: 'React Native',
            avatar: 'https://placeimg.com/142/142/any',
          },
        },
        {
          _id: 4,
          text: 'Anyone having difficulty with this one?',
          createdAt: new Date(2019, 1, 10, 11, 19),
          user: {
            _id: 3,
            name: 'React Native',
            avatar: 'https://placeimg.com/141/141/any',
          },
        },
        {
          _id: 3,
          text: 'Sounds interesting! Will try it after work today',
          createdAt: new Date(2019, 1, 10, 11, 18),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: require('../assets/images/stress1.png'),
          },
        },
        {
          _id: 2,
          text: 'Anyone going to try this today?',
          createdAt: new Date(2019, 1, 10, 11, 1),
          user: {
            _id: 3,
            name: 'React Native',
            avatar: require('../assets/images/stress2.png'),
          },
        },
        {
          _id: 1,
          text: 'Try writing 3 letters of gratitude to yourself, a friend, a family member, and then send them!',
          createdAt: new Date(2019, 1, 10, 10, 32),
          user: {
            _id: 4,
            name: 'React Native',
            avatar: require('../assets/images/robot-dev.png'),
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    console.log('send')
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  onPressAvatar(messages = []) {
    console.log('hello world');
    console.log(messages);
    messages.navigate('GroupMember');
  }


  render() {
    console.log('wtf');
    const BackButton = (
      <Button
          title="Back"
          onPress={() => this.props.navigation.goBack()}
        />
    );
    return (
      <ImageBackground source={require('../assets/images/background-2.jpeg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Header
            leftComponent={BackButton}
            centerComponent={{ text: 'Discussion', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            onPressAvatar={messages => this.onPressAvatar(this.props.navigation)}
            user={{
              _id: 1,
            }}
          />
        </View>
      </ImageBackground>
    )
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
    fontSize: 50,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 50,
    textAlign: 'center',
  },
  sliderText: {
    fontSize: 18,
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
