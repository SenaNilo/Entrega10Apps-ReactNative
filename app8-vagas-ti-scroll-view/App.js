import { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import Vagas from './src/components/Vagas/index';

function App(){
  
let listaVagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor Back-End',
    empresa: 'NovaCode LTDA',
    salario: 'R$ 5.000,00',
    descricao: 'Apoio no desenvolvimento de APIs com Node.js e banco de dados MongoDB.',
    contato: 'estagio@novacode.com.br',
  },
  {
    id: 2,
    titulo: 'UX/UI Designer Júnior',
    empresa: 'Designify Studio',
    salario: 'R$ 3.200,00',
    descricao: 'Criação de protótipos, fluxos de usuário e testes de usabilidade.',
    contato: 'talentos@designify.com',
  },
  {
    id: 3,
    titulo: 'Analista de Suporte Técnico',
    empresa: 'InfoSys Tech',
    salario: 'R$ 2.800,00',
    descricao: 'Atendimento a chamados e manutenção de sistemas internos.',
    contato: 'suporte@infosystech.com.br',
  },
  {
    id: 4,
    titulo: 'Analista de Dados Pleno',
    empresa: 'DataMind Analytics',
    salario: 'R$ 6.000,00',
    descricao: 'Criação de dashboards e relatórios em Power BI e SQL.',
    contato: 'vagas@datamind.com',
  },
  {
    id: 5,
    titulo: 'Desenvolvedor Front-End',
    empresa: 'TechWave Solutions',
    salario: 'R$ 4.500,00',
    descricao: 'Interfaces responsivas com React e integração com APIs.',
    contato: 'rh@techwave.com.br',
  },
];

 const [vagas, setVagas] = useState(listaVagas)

  return(
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Vagas Disponíveis</Text>
        <ScrollView>
          {vagas.map((vaga) => (
            <Vagas
              key={vaga.id}
              titulo={vaga.titulo}
              empresa={vaga.empresa}
              salario={vaga.salario}
              descricao={vaga.descricao}
              contato={vaga.contato}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;