export interface Satelite {
  id: string;
  nome: string;
  status: string;
  temp: number;
  bat: number;
}

export interface Alerta {
  id: string;
  titulo: string;
  critico: boolean;
}

// Tipagem das rotas da aplicação
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Satelites: undefined;
  Detalhes: { satelite: Satelite };
  Alertas: undefined;
};