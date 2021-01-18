import React from 'react';
import { StyleSheet, View ,ActivityIndicator} from 'react-native';

import * as firebase from 'firebase';

export default class Loading extends React.Component {

    componentDidMount(){
       this.unsAuth = firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate("Movies Area")
            }else{
                this.props.navigation.navigate("Signup")
            }
        })
    }
    componentWillUnmount(){
        this.unsAuth()
    }

    render(){
          return (
            <View style={styles.container}>
                <ActivityIndicator 
                   size="large"
                   color="#087EFC"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
