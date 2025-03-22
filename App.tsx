import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaView style={{paddingTop: StatusBar.currentHeight}}>
    <Text>asd</Text>
      <AppNavigator/>
      
   </SafeAreaView>
  );
}

