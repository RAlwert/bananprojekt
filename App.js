import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './Welcome';
import Apelsin from './Apelsin';
import Banan from './banan';
import FirstView from './firstView';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   < NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="starten" component={Welcome}/>
      <Stack.Screen name="orange" component={Apelsin}/>
      <Stack.Screen name="Banana" component={Banan}/>
      <Stack.Screen name="Första" component={FirstView}/>

    </Stack.Navigator>

   </NavigationContainer>
  );
}
