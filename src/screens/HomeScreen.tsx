import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: NavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
  
  const handleLogout = async () => {
    await AsyncStorage.removeItem('@user_email');
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Estado da Missão: NOMINAL</Text>
      
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Satelites')}>
        <Text style={styles.cardTitle}>🛰️ Monitorizar Frota</Text>
        <Text style={styles.cardDesc}>Ver telemetria de todos os CubeSats</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card, {borderColor: '#FF3D00'}]} onPress={() => navigation.navigate('Alertas')}>
        <Text style={styles.cardTitle}>⚠️ Incidentes e Alertas</Text>
        <Text style={styles.cardDesc}>Gerir chamados de anomalias</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Encerrar Sessão Segura</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0D17', padding: 20 },
  header: { color: '#00E5FF', fontSize: 20, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  card: { backgroundColor: '#1C2031', padding: 20, borderRadius: 10, marginBottom: 20, borderWidth: 1, borderColor: '#00E5FF' },
  cardTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  cardDesc: { color: '#B0BEC5', fontSize: 14 },
  logoutBtn: { marginTop: 'auto', padding: 15, alignItems: 'center' },
  logoutText: { color: '#FF3D00', fontWeight: 'bold' }
});