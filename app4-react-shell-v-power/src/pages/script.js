import { StyleSheet } from 'react-native'

const styles = new StyleSheet.create({
  body:{
    paddingTop: 40,
    marginLeft: 50,
    marginRight: 50,
  },
  h1:{
    fontSize: 19,
    fontWeight: 700,
    margin: '0 auto'
  },
  btn:{
    backgroundColor: '#2d2d2d',
    padding: 10,
    display: 'grid',
    placeItems: 'center',
    borderRadius: 10
  },
  btnText:{
    color: 'white'
  },
  result:{
    fontSize: 30,
    marginTop: 10,
    color: 'red',
    textAlign: 'center'
  },
  image:{
    margin: '0 auto',
     width: 150, height: 150
  }
})

export default styles