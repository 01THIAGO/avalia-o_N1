import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

// FIZ A PROVA INDIVIDUAL COM OS AQRQUIVOS APP.JS E O ARQUIVO "VISUALIZAR" NA PASTA ABAS!!!!!!!!
//ALUNO: THIAGO FERREIRA CAVALCANTE

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('./assets/background.jpg')} 
    resizeMode="cover" 
    style={styles.image}>

 <View style={styles.container}>
    <Image source={require('./assets/unifasipe.png')}
    resizeMode= "contain"
    style={{width: 400, 
            height: 100,
            marginTop: 200}}/>
  </View>
      <Text style={styles.text}>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</Text>
    </ImageBackground>
    
    <View
  style={{width5:50,
  height: 70,
  backgroundColor:"#fc5c65"}}    />
   
    <View
  style={{width5:50,
  height: 70,
  backgroundColor:"#4ECDC4"}}    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    position: "absolute",
    width: "100%",
    color: "green",
    fontSize: 16,
    lineHeight: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
  
});

export default App;