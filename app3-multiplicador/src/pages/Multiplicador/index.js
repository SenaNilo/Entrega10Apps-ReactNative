import { View, Text, TextInput, Pressable } from 'react-native'
import { useState } from 'react'

import styles from './styles'
import Input from '../../components/Input/index'
import Button from '../../components/Button/input'

function Multiplicador(){
  const [resultado, setResultado] = useState('')
  const [valor1, setValor1] = useState('')
  const [valor2, setValor2] = useState('')


  function calcular(){
    if(valor1 != '' && valor2 != '')
      setResultado(valor1 * valor2)
    else
      setResultado('')
  }
  function clear(){
    setValor1('')
    setValor2('')
    setResultado('')
  }

  return(
    <View style={styles.container}>
      <Text style={styles.h1}>Multiplicador de Numeros:</Text>

      <Input placeholder={"Digite o 1º número"} value={valor1} getValue={(e) => setValor1(e)}/>

      <Input placeholder={"Digite o 2º número"} value={valor2} getValue={(e) => setValor2(e)} />

      <Button action={calcular} text={"Calcular"} aditionalStyle={styles.calc} />
      
      <Button text={"Limpar"} action={clear} />

      <Text style={styles.result}>Resultado: { resultado }</Text> 

    </View>
  )
}

export default Multiplicador