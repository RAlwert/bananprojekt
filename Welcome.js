import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Låda from './låda';


export default function Welcome({navigation}) {

  
  return (
    <View style={styles.container}>
   

      <FlatList
      data={[
        {key:"Banansmothie"},
        {key:"Apelsinjuice"},
        {key:"Cider"},
      ]}
     
      renderItem={({item}) => 
      <TouchableOpacity onPress={()=>{
        navigation.navigate("Första", {person: item});

      }}>
        <Låda name={item}/> 
      </TouchableOpacity>
    }
      />
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
