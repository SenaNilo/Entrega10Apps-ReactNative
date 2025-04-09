import { Text, View } from 'react-native'
import { useState } from 'react'
import styles from './styles'
// text-field
import Botao from '../Button/index'

function Main(){   
  const [people, setPeople] = useState(0);

  function incrementar(){
    setPeople(people + 1)
  }

  function decrementar(){
    people > 0 ? setPeople(people - 1) : ""
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1} >Contador de Pessoas:</Text>

      <Text style={styles.result} >{people}</Text>

      <Botao style={styles.btn} text={"+"} action={incrementar}/>

      <Botao style={[styles.btn, styles.btnCancel]} text={"-"} action={decrementar} />

     
    </View>
  )
}  


export default Main