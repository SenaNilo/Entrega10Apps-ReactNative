import { TextInput } from 'react-native' 

import styles from './script'

// <Campo getText={setAlcool} placeholder={'Preço do Álcool'} />
function Campo(props){
  return(
      <TextInput style={styles.campo} onChangeText={props.getText} placeholder={props.placeholder} keyboardType={'numeric'}/>
  )
}

export default Campo