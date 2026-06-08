import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type DetalhesScreenRouteProp = RouteProp<RootStackParamList, 'Detalhes'>;

interface Props {
  route: DetalhesScreenRouteProp;
}

export default function DetalhesScreen({ route }: Props) {
  const { satelite } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{satelite.nome}</Text>
      
      <View style={styles.panel}>
        <Text style={styles.label}>Subsistema Térmico (Bateria):</Text>
        <Text style={[styles.value, { color: satelite.temp > 50 ? '#FF3D00' : '#00E5FF' }]}>
          {satelite.temp}°C
        </Text>
        
        <Text style={styles.label}>Estado de Carga (EPS):</Text>
        <Text style={[styles.value, { color: satelite.bat < 15 ? '#FF3D00' : '#00E5FF' }]}>
          {satelite.bat}%
        </Text>

        <Text style={styles.label}>Estado de Órbita:</Text>
        <Text style={styles.value}>{satelite.status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0D17', padding: 20 },
  title: { fontSize: 24, color: '#FFF', fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  panel: { backgroundColor: '#1C2031', padding: 20, borderRadius: 10, borderWidth: 1, borderColor: '#334' },
  label: { color: '#B0BEC5', fontSize: 14, marginTop: 15 },
  value: { fontSize: 22, color: '#FFF', fontWeight: 'bold', marginTop: 5 }
});