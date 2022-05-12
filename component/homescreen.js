

import React,{Component} from "react";
import { StyleSheet,View,TextInput,Text,Button,TouchableOpacity,SafeAreaView,Alert } from "react-native";
import  {ImageBackground,Pressable}  from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FontAwesome from 'react-native-vector-icons';
import{faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image = { uri: "https://i.pinimg.com/550x/dc/af/1a/dcaf1a908bc2befbbdb8b3516280e6b7.jpg" };

const Stack = createNativeStackNavigator();


const App = () => (
     <View style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         <center>
         <View>
      <Text style={{color: 'black', fontSize: 20, fontWeight: '800'}}>Login</Text>
       <Text><FontAwesomeIcon icon={faEnvelope}/><TextInput style={styles.input} placeholder="Correo"/></Text>
       <Text><FontAwesomeIcon icon={faLock}/><TextInput style={styles.input}  type="password" placeholder="Contraseña"/></Text>
  
         <Text >Sign in to your account</Text>
<TouchableOpacity   onPress={() => this.onLogin()}>
 <center>
  <View
    style={{
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      padding: 2,
      width:200
    }}>
    <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
      INGRESAR
    </Text>
  </View>
  </center>
  
</TouchableOpacity> 




<Text>{"\n"}</Text>
<Text>{"--------------O---------------"}</Text>
<TouchableOpacity   onPress={() => this.onLogin()}>
 <center>
  <View
    style={{
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      padding: 2,
      width:200
    }}>
    <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
    <FontAwesomeIcon icon={faFacebookSquare} color="white"/><Text>   </Text>
     INGRESAR
    </Text>
  </View>
  </center>
</TouchableOpacity> 

<Text>{"\n"}</Text>

<TouchableOpacity   onPress={() => this.onLogin()}>
 <center>
  <View
    style={{
      backgroundColor: 'tomato',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      padding: 2,
      width:200
    }}>
    <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
    <FontAwesomeIcon icon={faGoogle} color="white"/><Text>   </Text>
     INGRESAR
    </Text>
  </View>
  </center>
</TouchableOpacity> 
      

    <Text>{"\n"}</Text>
    

    <TouchableOpacity   onPress={() => this.onLogin()}>
 <center>
  <View
    style={{
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      padding: 2,
      width:200
    }}>
    <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
     REGISTRATE
    </Text>
  </View>
  </center>
</TouchableOpacity> 


         </View>
     

         </center>
        
    
 
       
       </ImageBackground>

         



     </View>


 







   );
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
      alignContent:'center'
     },
     image: {
       flex: 1,
       justifyContent: "center"
     },
     text: {
       color: "white",
       fontSize: 42,
       lineHeight: 84,
       fontWeight: "bold",
       textAlign: "center",
       backgroundColor: "#000000c0"
     },
     input:{

       borderWidth:1,
       borderColor:'#777',
       padding:8,
       margin:10,
       width:200,
    

     },
     welcome:{

      backgroundColor: "#007aff",
      paddingHorizontal: 30,
      paddingVertical: 5,
      borderRadius: 30
 

     },
     button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 8,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 11,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    }
     

   });



export default App;

