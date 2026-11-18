import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import CustomNavigationBar from './components/CustomNavigationBar';

export type RootStackParamList = {
  HomeScreen: undefined;
  SecondScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <MaterialCommunityIcons {...props} />,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}