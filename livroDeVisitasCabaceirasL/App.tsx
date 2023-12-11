import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './FormScreen'
import Home from './Home';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const App = ()=> {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="FormScreen" component={FormScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;