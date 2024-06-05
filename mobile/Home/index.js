import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../Services/api';

const Home = () => {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        setLoading(true);
        const response = await api.get('/reports');
        console.log('Resposta da API:', response.data);
        setDados(response.data.reports || []);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDados();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indice de relatos por estado</Text>
      
      {loading ? (
        <Text style={styles.loading}>Carregando...</Text>
      ) : dados.length > 0 ? (
        dados.map(item => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.reports}>Relatórios: {item.reports}</Text>
            <Text style={styles.createdAt}>Criado em: {new Date(item.createdAt).toLocaleDateString()}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noResult}>Não há resultados disponíveis.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reports: {
    fontSize: 16,
  },
  createdAt: {
    fontSize: 14,
    color: '#888',
  },
  noResult: {
    fontSize: 16,
    color: '#888',
  },
  loading: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Home;
