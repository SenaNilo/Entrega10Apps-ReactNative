import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  tituloPagina: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'crimson',
    textAlign: 'center',
    marginBottom: 20,
    marginTop:50
  },
  card: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  tituloVaga: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a', 
    marginBottom: 10,
  },
  texto: {
    marginLeft: 10,
    marginBottom: 5,
    color: '#333',
  },

  botaoContainer: {
  marginTop: 10,
  borderRadius: 5,
  overflow: 'hidden', 
}
});

export default styles;