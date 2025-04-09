import { Pressable, Text } from 'react-native'

import styles from './styles'

  // const [people, setPeople] = useState(0);
function Botao(props){
  

  return(
    <Pressable style={props.style} onPress={props.action}>
        <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  )
}

export default Botao