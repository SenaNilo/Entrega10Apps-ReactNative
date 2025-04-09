import { View, Text, Image } from 'react-native';
import myImage from './assets/foto.jpg';

function App(){
  return(
     <View>
       <Image source={myImage} style={{ width: 200, height: 200, margin:'auto' }} />

        <Text style={{color: '#00569D', fontSize: 22, margin: 15,fontWeight:600}}>
        Dados Pessoais:
        </Text>
        <Text style={{marginLeft:20}}> Nome: Patrícia Corval de Castro</Text>
        <Text style={{marginLeft:20}}> Idade: 19 anos</Text>
        <Text style={{marginLeft:20}}> Data de Nascimento: 01/06/2005</Text>
       
        <Text style={{color: '#4E97D1', fontSize: 22, margin: 15, fontWeight:600}}>
        Formação:
        </Text>
        <Text style={{marginLeft:20}}> Fatec Rubens Lara - Cursando Sistemas Para Internet </Text>
        <Text style={{marginLeft:20}}> CNA Idiomas - Formada em inglês Advanced </Text>

         <Text style={{color: '#00569D', fontSize: 22, margin: 15, fontWeight:600}}>
        Experiência:
        </Text>
        <Text style={{marginLeft:20}}> Estagiária de Front-End na empresa BDS Data Solution </Text>

         <Text style={{color: '#4E97D1', fontSize: 22, margin: 15,fontWeight:600}}>
        Projetos:
        </Text>
         <Text style={{marginLeft:20}}> Confira meus projetos no github: https://github.com/patycorval?tab=repositories </Text>

      </View>
  )
}


export default App;
