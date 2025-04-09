import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  area: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f4f8',
  },
  texto: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitulo: {
    fontSize: 18,
    marginVertical: 10,
    color: '#555',
  },
  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#1e3a8a',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
    resizeMode: 'contain',
  },
});