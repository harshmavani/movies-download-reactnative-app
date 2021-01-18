import React from 'react';
import {Image,TouchableOpacity,Linking} from 'react-native';
import * as firebase from 'firebase';
import firebaseConfig from './config';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons,MaterialIcons,Entypo,Octicons,MaterialCommunityIcons } from '@expo/vector-icons';
import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';
import LoadingScreen from './Screens/LoadingScreen';
import ProfileScreen from './Screens/ProfileScreen';
import home from './Screens/home';
import webseries from './Screens/webseries';
import m_home from './Screens/m_home';
import CustomSidebarMenu from './Screens/CustomSidebarMenu';

  firebase.initializeApp(firebaseConfig);
  const Drawer = createDrawerNavigator();
  function openprojectsmash(){
    return Linking.openURL("https://projectsmash.online")
  }
  function opentechnoyard(){
    return Linking.openURL("https://technoyard.in")
  }
  function openwebschooltoday(){
    return Linking.openURL("https://webschooltoday.com")
  }



  function MyDrawer() {
    return (
      
      <Drawer.Navigator initialRouteName="Feed"
      drawerStyle={{
        backgroundColor: 'white',
        width:"70%"
      }}
      drawerContentOptions={{activeTintColor:"#1580F2",inactiveTintColor:"black"}}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="Moviesarea"
          component={MyStack}
          options={{ 
            drawerLabel: 'Movies',
            style:{color:"white"},
            drawerIcon: config => <MaterialCommunityIcons name={'movie-open'} size={20} color={'#087EFC'} style={{marginRight:-20}}/>
          }}
        />

        <Drawer.Screen
          name="Technoyard"
          component={opentechnoyard}
          options={{ 
            drawerLabel: 'Technoyard.in',
            drawerIcon: config => <MaterialIcons name={'article'} size={22} color={'#087EFC'} style={{marginRight:-20}} />
          }}
        />
        
        <Drawer.Screen
          name="Projectsmash"
          component={openprojectsmash}
          options={{ 
            drawerLabel: 'Projectsmash.online',
            drawerIcon: config => <Octicons name={'project'} size={18} color={'#087EFC'} style={{marginRight:-20}} />
           }}
        />
        <Drawer.Screen
          name="Webschooltoday"
          component={openwebschooltoday}
          options={{ 
            drawerLabel: 'Webschooltoday.com',
            drawerIcon: config => <Entypo  name={'code'} size={22} color={'#087EFC'} style={{marginRight:-20}} />
          }}
        />
      </Drawer.Navigator>
    );
  }

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#1580F2' },
      }}
    >   
          <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown:null}}/>  
      <Stack.Screen 
      options={({ navigation }) => ({
    headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Image
        style={{ width: 30, height: 30 ,marginRight:20}}
        source={require('./assets/user.png')}
        resizeMode='contain'
      />
      </TouchableOpacity>    ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{ width: 23, height: 23 ,marginLeft:20}}
              source={require('./assets/menu.png')}
              resizeMode='contain'
            />
            </TouchableOpacity>
          )
  })}
   name="Movies Area"  component={MyTabs} />
             <Stack.Screen options={({ navigation }) => ({
          headerLeft: () => (null),headerTitle: "Create New Account",headerTitleStyle:{marginLeft:20}
            })} name="Signup" component={SignupScreen}/>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Logout" component={ProfileScreen} />

    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();  

function MyTabs() {
  return (
    <Tab.Navigator
    style={{ width: '100%' }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({color, size }) => {
        let iconName;

        if (route.name === 'Profile') {
          iconName ='logo-ionitron';
        } else if (route.name === 'Home') {
          iconName ='home';
        } else if(route.name === 'Movies'){
          iconName ='albums';
        } else if(route.name === 'WebSeries'){
          iconName ='caret-back-circle';
        }

        return <Ionicons name={iconName} size={22} color={color} />;
      },
    })}

>            
    <Tab.Screen name="Home" component={home} />
    <Tab.Screen name="Movies" component={m_home} />
    <Tab.Screen name="WebSeries" component={webseries} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    

    </Tab.Navigator>
  );
}

export default function navigationcontainer() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
