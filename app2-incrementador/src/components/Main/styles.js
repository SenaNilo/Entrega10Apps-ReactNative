import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    minHeight: '100vh',
    backgroundColor: '#f1f1f1',
    paddingTop: 40,
    padding: 30,
    alignItems: 'center'
  },
  btn:{
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5, 
    width: '100%', 
    alignItems: 'center', 
    backgroundColor: 'blue',
    marginBottom: 15
  },
  btnCancel:{
    backgroundColor: '#f84c40',
  },
  h1:{
    fontWeight: 600,
    fontSize: 26
  },
  result:{
    margin: 15,
    fontSize: 40
  }
})

export default styles