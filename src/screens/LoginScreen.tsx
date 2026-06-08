import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { salvarLogin, obterLogin } from '../utils/storage';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: NavigationProp;
}

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  useEffect(() => {
    const checkLogin = async () => {
      const user = await obterLogin();
      if (user) navigation.replace('Home');
    };
    checkLogin();
  }, [navigation]);

  const handleLogin = async () => {
    if (email === 'webn@gmail.com' && senha === '123456') {
      await salvarLogin(email);
      navigation.replace('Home');
    } else {
      Alert.alert('Erro', 'Credenciais inválidas. Verifica o e-mail e a senha.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>OrbitOps</Text>
      <Text style={styles.subtitle}>Ground Control Station</Text>
      
      <TextInput
        style={styles.input}
        placeholder="E-mail Operacional"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha (PIN)"
        placeholderTextColor="#666"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>INICIAR SESSÃO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0D17', justifyContent: 'center', padding: 20 },
  logo: { fontSize: 40, color: '#00E5FF', fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#B0BEC5', textAlign: 'center', marginBottom: 40 },
  input: { backgroundColor: '#1C2031', color: '#FFF', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#334' },
  button: { backgroundColor: '#00E5FF', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#0B0D17', fontWeight: 'bold', fontSize: 16 }
});