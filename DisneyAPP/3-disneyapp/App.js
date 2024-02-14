import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PokemonList from './src/screens/PokemonList';
import LoginForm from './src/screens/LoginForm';
import 'react-native-gesture-handler';

export default function App() {
  //return <PokemonList/>
  return (
    <View> 
      <LoginForm name="Bryan Davila" surname="Davila" age="20"/>
      <LoginForm name="Pepe pepe pepe"  surname="Davila" age="20"/>
      <LoginForm name="Luis Luis Luis"  surname="Davila" age="20"/>
      <LoginForm name="Carla Carla Carla"  surname="Davila" age="20"/>

    </View>
  );

  
  // (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
