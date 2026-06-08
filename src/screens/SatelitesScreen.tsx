import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ListRenderItem } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, Satelite } from '../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Satelites'>;

interface Props {
  navigation: NavigationProp;
}

const frota: Satelite[] = [
  { id: '1', nome: 'FIAP-CUBESAT-1', status: 'NOMINAL', temp: 25.4, bat: 90 },
  { id: '2', nome: 'ORBIT-B2', status: 'SAFE_MODE', temp: 58.2, bat: 12 },
  { id: '3', nome: 'GEO-EYE-9', status: 'NOMINAL', temp: 22.1, bat: 100 },
];

export default function SatelitesScreen({ navigation }: Props) {
  const renderItem: ListRenderItem<Satelite> = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate('Detalhes', { satelite: item })}
    >
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={[styles.status, { color: item.status === 'NOMINAL' ? '#00E5FF' : '#FF3D00' }]}>
        {item.status}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={frota} 
        keyExtractor={item => item.id} 
        renderItem={renderItem} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0D17', padding: 10 },
  item: { backgroundColor: '#1C2031', padding: 20, marginVertical: 8, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between' },
  nome: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  status: { fontSize: 14, fontWeight: 'bold' }
});