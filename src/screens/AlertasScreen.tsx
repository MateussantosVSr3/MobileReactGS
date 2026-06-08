import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ListRenderItem } from 'react-native';
import { salvarAlertas, obterAlertas } from '../utils/storage';
import { Alerta } from '../types';

const alertasIniciais: Alerta[] = [
  { id: '1', titulo: 'Sobreaquecimento: ORBIT-B2', critico: true },
  { id: '2', titulo: 'Queda de Link de Telemetria: NODE-X', critico: true },
];

export default function AlertasScreen() {
  const [alertas, setAlertas] = useState<Alerta[]>([]);

  useEffect(() => {
    const carregarDados = async () => {
      const dadosSalvos = await obterAlertas();
      if (dadosSalvos && dadosSalvos.length > 0) {
        setAlertas(dadosSalvos);
      } else {
        setAlertas(alertasIniciais);
        await salvarAlertas(alertasIniciais);
      }
    };
    carregarDados();
  }, []);

  const resolverAlerta = async (id: string) => {
    const novaLista = alertas.filter(alerta => alerta.id !== id);
    setAlertas(novaLista);
    await salvarAlertas(novaLista); // Atualiza no AsyncStorage
  };

  const renderItem: ListRenderItem<Alerta> = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.texto}>{item.titulo}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => resolverAlerta(item.id)}>
        <Text style={styles.btnText}>BAIXAR INCIDENTE</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {alertas.length === 0 ? (
        <Text style={styles.empty}>Nenhum alerta ativo. Sistemas estáveis.</Text>
      ) : (
        <FlatList 
          data={alertas} 
          keyExtractor={item => item.id} 
          renderItem={renderItem} 
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0D17', padding: 10 },
  item: { backgroundColor: '#3E1010', padding: 20, marginVertical: 8, borderRadius: 8, borderWidth: 1, borderColor: '#FF3D00' },
  texto: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 15 },
  btn: { backgroundColor: '#FF3D00', padding: 10, borderRadius: 5, alignItems: 'center' },
  btnText: { color: '#FFF', fontWeight: 'bold' },
  empty: { color: '#00E5FF', textAlign: 'center', marginTop: 50, fontSize: 18 }
});