import { View, Text, Image, StyleSheet } from 'react-native';

import styles from './styles'

export default function ProductCard({ title, price }) {
  return (
    <View style={styles.card}>
      <Image
        source={require('../../../assets/imagem_azul.png')}
        style={styles.image}
      />
      <Text>{title}</Text>
      <Text>{price}</Text>
    </View>
  );
}