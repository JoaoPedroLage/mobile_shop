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

import { Redirect, useGlobalSearchParams, router, Link } from 'expo-router';
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
    // router.setParams({ selectedProduct: JSON.stringify(item) });
  };

  return (
    <SafeAreaView
      style={styles.container}
    >
      {/* <TextInput
        onChangeText={setText}
        value={text}
        placeholder={'Please type here…'}
      /> */}
      <ScrollView
        contentContainerStyle={styles.viewListCategories}
        horizontal={true}
      >
        <Button
          onPress={() => onPressSelectedCategory('All Products')}
          title={'All Products'}
        />
        <FlatList
          // style={styles.flatListCategories}
          contentContainerStyle={{ flexDirection: "row" }}
          data={categories}
          keyExtractor={(index) => index}
          renderItem={({ item }) => (
            <View
            // style={styles.viewListCategories}
            >
              <Button onPress={() => onPressSelectedCategory(item)} title={item} />
            </View>
          )}
        />
      </ScrollView>
      <FlatList
        style={styles.flatList}
        data={products}
        keyExtractor={(item: Product | any) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => { onPressSelectedProduct(item); setLoading(false); }}
          >
            <Link
              href={{ pathname: "/product", params: { item } }}
            >
              <View
                style={styles.card}
              >
                <Text>{item.title}</Text>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text>R$ {item.price}</Text>
                <View style={styles.rowList}>
                  <Text>{item.rating.count}</Text>
                  <Image source={{ uri: '../../assets/images/icons8-star-50.png' }} style={{ width: 10, height: 10 }} />
                  <Text>{item.rating.rate}</Text>
                </View>
              </View>
            </Link >
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
  flatList: {
    width: '100%',
    height: '100%',
  },
  flatListCategories: {
    flexDirection: 'column',
  },
  viewListCategories: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  flatListView: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  rowList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingCount: {
    marginRight: 5,
  },
  starIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  ratingRate: {
    marginRight: 10,
  },
  card: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '96%',
    height: 350,
  },
});
