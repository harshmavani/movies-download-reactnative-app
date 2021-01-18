import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,ActivityIndicator,BackHandler} from 'react-native';
import { WebView } from 'react-native-webview';

export default class webseries extends React.Component {
  constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = ()=>{
    this.WEBVIEW_REF.current.goBack();
    return true;
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

    render(){

          return (
            <View style={styles.container}>
              
                <WebView 
                source ={{ uri:'https://moviesarea.online/web_series.php'}} 
                ref={this.WEBVIEW_REF}
                onNavigationStateChange={this.onNavigationStateChange.bind(this)}

                startInLoadingState={true}
                renderLoading={() => (
                  <ActivityIndicator
                    color='red'
                    size='large'
                    style={styles.flexContainer}
                  />
                  )}
                />
            <StatusBar style="auto" />
            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  flexContainer: {
    flex: 1,
    top:-200
  },
  tabBarContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#b43757'
  },
  button: {
    color: 'white',
    fontSize: 24
  }
});
