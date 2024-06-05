import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  
  const irHome = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/Logo-tela-principal.png')}
        />
        <Text style={styles.title}>Com a OceanWatch, sua contribuição para um oceano melhor</Text>
        <TouchableOpacity style={styles.button} onPress={irHome}>
          <Text style={styles.textoBotao}>Começa Aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 99,
  },
  image: {
    width: 300,
    height: 400,
  },
  title: {
    fontSize: 16,
    marginVertical: 8,
    textAlign: 'center',
  },
  button: {
    borderRadius: 30,
    backgroundColor: 'rgba(18, 82, 166, 1)',
    width: 297,
    marginTop: 53,
    padding: 15,
    height: 62,
  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Login;
