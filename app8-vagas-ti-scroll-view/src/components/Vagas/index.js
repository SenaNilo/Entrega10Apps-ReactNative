
import { View, Text, Button, Alert} from 'react-native';
import styles from './styles';
import BotaoCandidatura from '../BotaoCandidatura';

function Vagas(props){
   const candidatar = () => {
    Alert.alert(
      'Candidatura enviada!',
      `Você se candidatou à vaga de ${props.titulo}.`
    );
  };
  return(
    <View style={styles.card}>
      <Text style={styles.tituloVaga}>{props.titulo}</Text>
      <Text style={styles.texto}>Salário: {props.salario}</Text>
      <Text style={styles.texto}>Descrição: {props.descricao}</Text>
      <Text style={styles.texto}>Contato: {props.contato}</Text>
      <BotaoCandidatura titulo={props.titulo} />
    </View>
  )
}

export default Vagas;