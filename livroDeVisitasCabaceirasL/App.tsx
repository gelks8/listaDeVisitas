// import { Text, View, Image } from 'react-native';
// import styles from './Styles';
// import { Button } from '@rneui/themed';
// import { useNavigation } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './FormScreen'
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

const App = ()=> {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AppNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="FormScreen" component={FormScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;