import { View, Text, Image, Pressable } from 'react-native';
import { useState } from 'react'

import styles from './script'
import myImage from '../../assets/gasosa.jpg'

import Campo from '../components/Campo/Campo'

//Basta dividir o preço do litro do etanol pelo da gasolina. Se o resultado for inferior a 0,7, o derivado da cana-de-açúcar é o melhor para abastecer. Se for maior que 0,7, então a gasolina é melhor.


function Main() {
  const [alcool, setAlcool] = useState()
  const [gasolina, setGasolina] = useState()
  const [result, setResult] = useState()

  function calcular(){
    setResult((alcool/gasolina) <= 0.7 ? "Abastecer com Álcool" : "Abastecer com Gasolina")
    // alcool/gasolina <= 0.7 == alcool melhor
    // alcool/gasolina > 0.7 == gasosa melhor
  }

  return (
    <View style={styles.body}>
      <Text style={styles.h1}> Álcool ou Gasolina </Text>

      <Image style={styles.image} source={myImage} />
      

      <Campo getText={setAlcool} placeholder={'Preço do Álcool R$'} />
      
      <Campo getText={setGasolina} placeholder={'Preço da Gasolina R$'} />
      
      <Pressable style={styles.btn} onPress={calcular}>
        <Text style={styles.btnText}>Verificar</Text>
      </Pressable>

      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

export default Main