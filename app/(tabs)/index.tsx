import React from 'react';

import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  Button,
  SafeAreaView,
  Pressable,
  ScrollView
} from 'react-native';

import { useRouter  } from 'expo-router';

import { Text, View } from '@/components/Themed';

import { Product } from '../../interfaces/productInterface';

import getAllProducts from '../../services/apiGetAllProducts';
import getByCategory from '../../services/apiGetByCategory';
import getAllCategories from '../../services/apiGetAllCategories';

import { useCart } from '../context/CartContext';

import { useState, useEffect } from 'react';

export default function HomeScreen() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  // const params = useGlobalSearchParams<{ q?: string }>();
  // const [_selectProduct, setSelectProduct] = React.useState(params.q);

  const { selectProduct } = useCart();

  const navigation = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const allCategories: any = await getAllCategories();
        setCategories(allCategories);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      if (selectedCategory !== 'All Products') {
        try {
          const productsByCategory: any = await getByCategory(selectedCategory);
          setProducts(productsByCategory);
        } catch (error) {
          setLoading(false);
        }
      }
      else {
        try {
          const allProducts: any = await getAllProducts();
          setProducts(allProducts);
        } catch (error) {
          setLoading(false);
        }
      }
    };

    fetchProductsByCategory();
  }, [selectedCategory]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  function onPressSelectedCategory(item: string) {
    setSelectedCategory(item);
  };

  function onPressSelectedProduct(item: Product | any) {
    selectProduct(item);

    navigation.push('/product');
    // router.setParams({ selectedProduct: JSON.stringify(item) });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} horizontal>
        <Button onPress={() => onPressSelectedCategory('All Products')} title={'All Products'} />
        <FlatList
          contentContainerStyle={styles.categoryList}
          data={categories}
          horizontal
          keyExtractor={(index) => index}
          renderItem={({ item }) => (
            <Button onPress={() => onPressSelectedCategory(item)} title={item} />
          )}
        />
      </ScrollView>
      <FlatList
        style={styles.productList}
        data={products}
        keyExtractor={(item: Product | any) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => onPressSelectedProduct(item)}>
            <View style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.price}>R$ {item.price}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>{item.rating.count}</Text>
                  <Image source={{ uri: '../../assets/images/icons8-star-50.png' }} style={styles.starIcon} />
                  <Text style={styles.ratingText}>{item.rating.rate}</Text>
                </View>
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  categoryList: {
    flexDirection: 'row',
  },
  productList: {
    width: '100%',
    height: '100%',
  },
  card: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginRight: 5,
  },
  starIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
});
