import { View, ScrollView } from 'react-native';
import Header from '../../components/Header/index';
import ProductCard from '../../components/ProductCard/index';

export default function Products() {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <ProductCard title="Produto 1" price="R$ 99,99" />
        <ProductCard title="Produto 2" price="R$ 149,99" />
        <ProductCard title="Produto 3" price="R$ 59,99" />
        <ProductCard title="Produto 4" price="R$ 199,99" />
      </ScrollView>
    </View>
  );
}

