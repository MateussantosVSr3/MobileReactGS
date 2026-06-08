import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alerta } from '../types';

export const salvarLogin = async (email: string): Promise<void> => {
  try {
    await AsyncStorage.setItem('@user_email', email);
  } catch (e) {
    console.error("Erro ao guardar login", e);
  }
};

export const obterLogin = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('@user_email');
  } catch (e) {
    console.error("Erro ao obter login", e);
    return null;
  }
};

export const salvarAlertas = async (alertas: Alerta[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(alertas);
    await AsyncStorage.setItem('@alertas_ativos', jsonValue);
  } catch (e) {
    console.error("Erro ao guardar alertas", e);
  }
};

export const obterAlertas = async (): Promise<Alerta[] | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@alertas_ativos');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Erro ao obter alertas", e);
    return null;
  }
};