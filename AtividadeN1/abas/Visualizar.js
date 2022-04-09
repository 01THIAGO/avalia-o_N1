import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

// FIZ A PROVA INDIVIDUAL COM OS AQRQUIVOS APP.JS E O ARQUIVO "VISUALIZAR" NA PASTA ABAS!!!!!!!!
//ALUNO: THIAGO FERREIRA CAVALCANTE

const App = () => (
 <View style={styles.container}>
    <Image source={require('./assets/inifasipeFachada.jpg')}
    style={styles.image}/>

  <View
  style={styles.box}/>
          
 <View
  style={styles.box1}/>
          
   
  </View>

  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "contain"
  },
  box:{
    backgroundColor:"#fc5c65",
    width: 100,
    position:'absolute',
    height: 100,
    top: 20,
    left: 20
  },
  box1:{
    backgroundColor:"#fc5c65",
    width: 100,
    position:'absolute',
    height: 100,
    top: 20,
    left: -20
  }
  
});

export default App;