import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList,Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Låda from './låda';

export default function FirstView({navigation, route}) {


  return (
    
    <View style={styles.container}>
        <Text style={styles.storvit}> {route.params.person.key}</Text>
        
  
        
  
    </View>
  
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
   alignItems:"center",
    marginTop:0
  },
  storvit:{
    fontSize:40,
    color:"#ffffff",
    fontWeight: "bold"
  }
});