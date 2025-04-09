import { TextInput } from 'react-native'

import styles from './styles'

function Input(props){
  return(
    <TextInput 
      placeholder={props.placeholder} 
      style={styles.input}  
      onChangeText={props.getValue}
      keyboardType='numeric'
      value={props.value}
    />
  )
}

export default Input