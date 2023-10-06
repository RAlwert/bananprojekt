import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList,Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Låda(props) {

 

  return (
    <View style={finstyles.bluebox}>
        <Text style={finstyles.vittext}>{props.name.key}</Text>
     
    </View>
  );
}


const finstyles = StyleSheet.create({
  bluebox: {
    flex:1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
    height:100,
    width:100,
    marginTop:5,

  },
  vittext:{
    color:"#ffffff",
    


  }

});