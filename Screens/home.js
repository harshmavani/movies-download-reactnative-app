import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,Image} from 'react-native';
import {Card, CardItem, Body, Text } from 'native-base';

export default class home extends React.Component {

    render(){
          return (
            <View style={styles.container}>
                <Card>
                    <CardItem>
                    <Body style={{alignItems:'center'}}>
                        <Text style={{fontWeight:"bold"}}>Select Catagory</Text>
                    </Body>
                    </CardItem>
                </Card>
                <Card style={{marginLeft:15, marginRight:15}}>
                    <CardItem button onPress={() => this.props.navigation.navigate('Movies')} style={{backgroundColor:"#E5E7E9"}}>
                    <Body style={{alignItems:'center'}}>
                        <Image
                            source={require('../assets/openmovie.jpg')} 
                            resizeMode='contain'
                            style={{height:250,width:"100%"}}
                            />
                    </Body>
                    </CardItem>
                    <CardItem footer bordered style={{alignItems:'center',backgroundColor:"#E5E7E9",borderTopColor:"black"}} button onPress={() => this.props.navigation.navigate('Movies')}>
                        <Body style={{alignItems:'center'}}>
                            <Text style={{fontWeight:"bold",color:"#1E8BF9"}}>Movies</Text>
                        </Body>
                    </CardItem>
                </Card>  
                <Card style={{marginLeft:15, marginRight:15}}>
                    <CardItem button onPress={() => this.props.navigation.navigate('WebSeries')} style={{backgroundColor:"#E5E7E9"}}>
                    <Body style={{alignItems:'center'}}>
                        <Image
                            source={require('../assets/openwebseries.jpg')} 
                            resizeMode='contain'
                            style={{height: 250,width:"100%"}}
                            />
                    </Body>
                    </CardItem>
                    <CardItem footer bordered style={{alignItems:'center',backgroundColor:"#E5E7E9",borderTopColor:"black"}} button onPress={() => this.props.navigation.navigate('WebSeries')}>
                        <Body style={{alignItems:'center'}}>
                            <Text style={{fontWeight:"bold",color:"#1E8BF9"}}>Web Series</Text>
                        </Body>
                    </CardItem>
                </Card>               
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
