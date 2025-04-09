import { View, Text, Image } from 'react-native'
import { useState } from 'react'

import styles from './script'
import myImage from '../../../assets/imcImg.png'
import Input from '../../components/Input/index.js'
import Button from '../../components/Button/index'

function Main(){
  const [resultado, setResultado] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')


  function calcular(){
    if(peso != '' && altura != '')
      setResultado((peso / (altura ** 2)).toFixed(1))
    else
      setResultado('')
  }
  function clear(){
    setPeso('')
    setAltura('')
    setResultado('')
  }


  return(
    <View style={styles.container}>
      <Text style={styles.h1}>Calcular IMC:</Text>
      
      <Image source={myImage} style={styles.img} />

      <Input placeholder={"Peso"} value={peso} getValue={(e) => setPeso(e)}/>

      <Input placeholder={"Altura"} value={altura} getValue={(e) => setAltura(e)} />

      <Button action={calcular} text={"Calcular"} aditionalStyle={styles.calc} />
      
      <Button text={"Limpar"} action={clear} />

      <Text style={styles.result}>Resultado: { resultado }</Text> 

    </View>
  )
}

export default Main