import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SatelitesScreen from './src/screens/SatelitesScreen';
import DetalhesScreen from './src/screens/DetalhesScreen';
import AlertasScreen from './src/screens/AlertasScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#0B0D17' },
          headerTintColor: '#00E5FF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Painel de Controlo' }} />
        <Stack.Screen name="Satelites" component={SatelitesScreen} options={{ title: 'Frota Orbital' }} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Telemetria' }} />
        <Stack.Screen name="Alertas" component={AlertasScreen} options={{ title: 'Gestão de Incidentes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}