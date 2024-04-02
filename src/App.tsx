import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';
import OriginalUiScreen from './screen/Ui/UiScreen';
import MapScreen from './screen/Map/MapScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
      <TouchableOpacity onPress={() => navigation.navigate('UiScreen')}>
        <Text>UI Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
        <Text>Map Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const UiScreenWrapper = () => {
  return <OriginalUiScreen />;
}

const MapScreenWrapper = () => {
  return <MapScreen />;
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="UiScreen" component={UiScreenWrapper} options={{ headerShown: false }}/>
        <Stack.Screen name="MapScreen" component={MapScreenWrapper} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
