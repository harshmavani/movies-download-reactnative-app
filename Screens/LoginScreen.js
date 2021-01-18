import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Alert,Image} from 'react-native';
import { Button, Item, Input, Label} from 'native-base';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
    state={
        email:"",
        password:""
    }
     UserLogin(email,password){
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(() => {
            this.props.navigation.replace('Movies Area')
        })
        .catch((error) => {
            Alert.alert(error.message)
        });  
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
                <Item floatingLabel style={{marginLeft:50,marginRight:50,}}>
                    <Label>Email :</Label>
                    <Input 
                        value={this.state.email}
                        onChangeText={(text)=>this.setState({email:text})}
                    />
                </Item>
                <Item floatingLabel style={{marginLeft:50,marginRight:50,marginTop:10,marginBottom:10}}>
                    <Label>Password :</Label>
                    <Input
                    secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={(text)=>this.setState({password:text})}
                    />
                </Item>
                    <Button full rounded 
                        style={{margin:10,marginLeft:90,marginRight:90 ,backgroundColor:"#087EFC"}}
                        onPress={()=> this.UserLogin(this.state.email,this.state.password)}
                        >
                    <Text style={{fontSize:22 ,color: "white" }}>Login</Text>
                </Button>
                
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Signup')}
                >
                    <Text style={{textAlign:"center",fontWeight:"700"}}>Don't have account ?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Linking.openURL("https://moviesarea.online")} style={{ top:50}}><Text style={{textAlign:"center",fontWeight:"bold",color:"#087EFC"}}>moviesarea.online</Text></TouchableOpacity>
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
});
