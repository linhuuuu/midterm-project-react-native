import {SafeAreaView} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { styles } from './src/styles/styles';


export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

