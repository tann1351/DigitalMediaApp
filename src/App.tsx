import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';
// นำเข้า UiScreen จากที่อยู่ของไฟล์
import OriginalUiScreen from './screen/Ui/UiScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* ใช้ชื่อของ screen ในการ navigate ที่ถูกกำหนดไว้ใน Stack.Screen */}
      <TouchableOpacity onPress={() => navigation.navigate('UiScreen')}>
        <Text>Go To UI TEST Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

// ปรับชื่อของ UiScreen wrapper component เพื่อหลีกเลี่ยงการชนกันของชื่อ
const UiScreenWrapper = () => {
  return <OriginalUiScreen />;
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* ใช้ UiScreenWrapper เป็น component สำหรับ routing */}
        <Stack.Screen name="UiScreen" component={UiScreenWrapper} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
