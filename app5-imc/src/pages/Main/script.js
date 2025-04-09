import { StyleSheet } from 'react-native'

const styles = new StyleSheet.create({
  container:{
    minHeight: '100vh',
    backgroundColor: '#f1f1f1',
    paddingTop: 40,
    padding: 30,
    alignItems: 'center'
  },
  h1:{
    fontSize: 20,
    marginBottom: 20
  },
  calc:{
    backgroundColor: 'green'
  },
  result:{
    marginTop: 10,
    fontSize: 20,
    fontWeight: 600,
  },
  img:{
    width: 200,
    height: 150,
    marginBottom: 20,
    border: '1.7px solid black',
    borderRadius: 5
  }
}
)

export default styles