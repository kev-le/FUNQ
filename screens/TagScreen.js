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
import { ButtonGroup, Button, Icon  } from 'react-native-elements'


export default class TagScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2,
      selectedIndex2: 2,
      selectedIndex3: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
    this.updateIndex2 = this.updateIndex2.bind(this)
    this.updateIndex3 = this.updateIndex3.bind(this)
  }

  static navigationOptions = {
    header: null,
  };

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  updateIndex2 (selectedIndex2) {
    this.setState({selectedIndex2})
  }
  updateIndex3 (selectedIndex3) {
    this.setState({selectedIndex3})
  }

  render() {
    const buttons = ['Motivation', 'Productivity', 'Confidence']
    const buttons2 = ['Energy', 'Calmness', 'Passion']
    const buttons3 = ['Stress', 'Focus', 'Strength']
    const { selectedIndex, selectedIndex2, selectedIndex3 } = this.state
    
    return (
      <ImageBackground source={require('../assets/images/background-2.jpeg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
          <Text style={styles.getStartedText}>What do you want to work on?</Text> 

          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 100}}
          />

          <ButtonGroup
            onPress={this.updateIndex2}
            selectedIndex={selectedIndex2}
            buttons={buttons2}
            containerStyle={{height: 100}}
          />

          <ButtonGroup
            onPress={this.updateIndex3}
            selectedIndex={selectedIndex3}
            buttons={buttons3}
            containerStyle={{height: 100}}
          />
 
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            onPress={() => this.props.navigation.navigate('Landing')}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 20}}
            title='Done'>
          </Button>
      </View>
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
    paddingTop: 0,
  },
  welcomeContainer: {
    zIndex: 1,
    alignItems: 'center',
    marginTop: 20,
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
    fontSize: 36,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 36,
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
