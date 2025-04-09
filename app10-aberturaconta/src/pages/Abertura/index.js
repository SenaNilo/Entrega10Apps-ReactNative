import { ScrollView, View, Text, TextInput, Switch, Pressable } from 'react-native'
import { useState } from 'react'

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

import InputGroup from '../../components/InputGroup/index'
import Button from '../../components/Button/index'

import styles from './styles';

export default function Abertura(){
  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [limiteConta, setLimiteConta] = useState(500);
  const [brasileiro, setBrasileiro] = useState(true);
  const [sexoValue, setSexoValue] = useState("Masculino");
  const [escolaridadeValue, setEscolaridadeValue] = useState("Ensino Fundamental");
  const [resultado, setResultado] = useState()


  function showValues(){
    if(name != "" && idade != ""){
      setResultado(
        () => {
          
          return(
            <View>
              <Text> Nome: {name} </Text>
              <Text> Idade: {idade} </Text>
              <Text> Sexo: {sexoValue} </Text>
              <Text> Escolaridade: {escolaridadeValue} </Text>
              <Text> Limite da Conta: {limiteConta} </Text>
              <Text> Brasileiro: {(brasileiro) ? "Nativo" : "Gringou"} </Text>
            </View>
          )
        }
      );
      
    }
  }

  return (
    <ScrollView style={styles.container}>

      <InputGroup text="Nome:" inputName="text" value={name} getValue={(e) => setName(e)} />

      <InputGroup text="Idade:" inputName="text-idade" value={idade} getValue={(e) => setIdade(e)} />

      <InputGroup text="Sexo:" inputName="picker-sexo" sexoValue={ sexoValue } onValueChange={ (value, index) => setSexoValue(value) } />
      
      <InputGroup text="Escolaridade:" inputName="picker-escolaridade" escolaridadeValue={ escolaridadeValue } onValueChange={ (value, index) => setEscolaridadeValue(value) } />

      <InputGroup text="Limite na conta:" inputName="slider" value={ limiteConta }  onValueChange={ (e) => setLimiteConta(e) } />

      <InputGroup text="Brasileiro" inputName="switch" brasileiro={ brasileiro } onValueChange={ (e) => setBrasileiro(e) } />
      
      <Button text="Confirmar" aditionalStyle={styles.btn} action={ showValues }  />

      <View> { resultado } </View>
    </ScrollView>
  )
}
// Nome (TextInput), Idade (TextInput), Sexo (Picker), Escolaridade (Picker), Limite na conta (Slider), Brasileiro (Switch), Botão (Button ou Pressable). Ao clicar no botão “Confirmar” exibir todos os dados abaixo com Texts.