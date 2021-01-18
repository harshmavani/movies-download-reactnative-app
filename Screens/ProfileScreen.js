import React from 'react';
import { StyleSheet, Text, View ,Alert, Image} from 'react-native';
import { Button } from 'react-native-paper';

import * as firebase from 'firebase';


export default class HomeScreen extends React.Component {
    state={
        email:""
    }
    componentDidMount(){
        try {
            this.unsAuth = firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    email:user.email
                })
            }else{
                this.props.navigation.navigate("Login")
            }
        })
        } catch (error) {
            Alert.alert(error.message)
        }
        
    }
    UserSignout(){
        firebase.auth().signOut()
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    componentWillUnmount(){
        this.unsAuth()
    }
    
    render(){
          return (
            <View style={styles.container}>
                <View style={{justifyContent:"center",alignItems: 'center'}}>
                    <Image 
                    source={require('../assets//icon.png')}
                    style={{height:"60%",width:"60%"}}
                    />
                </View>
                <Text style={{textAlign:"center",fontSize:20,margin:30}}>You are login as {this.state.email}</Text>
                <Button full rounded 
                    style={{margin:10,marginLeft:90,marginRight:90,backgroundColor:"#087EFC"}}
                    onPress={()=> this.UserSignout()}
                >
                    <Text style={{fontSize:22 ,color: "white" }}>Logout</Text>
                </Button>   
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
});
