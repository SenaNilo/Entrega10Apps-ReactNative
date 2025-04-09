import  {useState } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';
import myImage from './assets/charadanovo.png'

function App(){
 const [input, setInput] = useState('');
  const [numeroSorteado, setNumeroSorteado] = useState(null);

  function descobrir(){
    if (input === ''){
      alert('Digite um número!')
      return;
    }
  const numeroAleatorio = Math.floor(Math.random() * 11);
  setNumeroSorteado(numeroAleatorio);

 if (parseInt(input) === numeroAleatorio) {
      Alert.alert('Parabéns!', 'Você acertou! 🎉');
    } else {
      Alert.alert('Errou!', `O número era ${numeroAleatorio}`);
    }
    setInput('');
  }

  return(
  <View style={styles.area}>
    <Text style={styles.texto}> Jogo do Nº Aleatório </Text>

    <Image
      source={myImage}
      style={styles.image}
    />

    <Text style={styles.subtitulo}>Pense em um número de 0 a 10</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o número"
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
      />

    <Button title="Descobrir" onPress={descobrir} />

    {numeroSorteado !== null && (
        <Text style={styles.resultado}>O número sorteado foi: {numeroSorteado}</Text>
    )}
    </View>
  );
}


export default App;

