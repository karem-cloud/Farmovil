// In App.js in a new project

import React, {Component}  from 'react';
import Home  from './component/homescreen';

import signup from './Screens/Signup';
import signin from './Screens/Login';
import { View, Text,Image,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splashPic from './assets/nail.png'
import Login from './Screens/Login';
const Stack = createNativeStackNavigator();

 function SplashScreen({navigation}) {
setTimeout(()=>{
navigation.replace('loginScreen'); //stack name
},3000);

return(
<View style={styles.centerContent} >
 <Image style={styles.imgStyle} source={require('./assets/splashs.png')}/>



</View>
);
}

const styles =StyleSheet.create({
   centerContent: {

      justifyContent: 'center',
      alignItems:'center'
   },
   textStyle:{
     fontSize:30,
     paddingTop:30,
     color:'#000'
   },
   imgStyle:{
     width:380,
     height:800,
     marginTop:30

   }

   });




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashsScreen" component={SplashScreen}
        options={{headerShown:false, }}
        
        />
       
        <Stack.Screen name="loginScreen" component={Home} />
        

        <Stack.Screen name="Login" component={signup}/>
        <Stack.Screen name="signup" component={signin}/>
       
      </Stack.Navigator >
    </NavigationContainer>
  );
}



/** 
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
 
*/
// In App.js in a new project
/**
 * 
 * 
import  React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  return (

<NavigationContainer>
<Text>Hello</Text>
</NavigationContainer>



  );
}


 */


/***
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
 
const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => 
        <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}
 
export default FlatListBasics;
**/