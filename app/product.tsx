import React from 'react';

import { StyleSheet, Pressable, Alert, Image, ScrollView } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useCart } from './context/CartContext';

import Carousel from '@/components/ImagesCarousel';

// import { router, useGlobalSearchParams } from 'expo-router';

import { useState } from 'react';

export default function ProductScreen() {
  const {
    cart,
    addToCart,
    selectedProduct,
  } = useCart();

  // const params = useGlobalSearchParams<{ q?: string }>();
  // const { cart, selectedProduct } = useGlobalSearchParams<Product[] | any>();

  // const [shoppingCart, setShoppingCart] = React.useState<Product[]>(cart ? cart : []);

  const [product] = useState(selectedProduct);

  const mockProduct = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120,
    },
    "quantity": 1
  };

  const onAddToCart = () => {

    if (__DEV__) {
      alert('Product added to cart!\nThe product has been successfully added to your cart.');
    }

    Alert.alert(
      'Product added to cart!',
      'The product has been successfully added to your cart.',
      [
        {
          text: 'OK',
          onPress: () => { },
        },
      ],
    );

    addToCart(product ? product : mockProduct);
  };

  return (
    <View style={styles.container}>
      {product ? (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>{product.title}</Text>
          <Carousel uris={[product.image, product.image, product.image]} />
          <Text style={styles.price}>R$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.category}>Category: {product.category}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{product.rating.count}</Text>
            <Image source={{ uri: '../../assets/images/icons8-star-50.png' }} style={styles.starIcon} />
            <Text style={styles.ratingText}>{product.rating.rate}</Text>
          </View>
          <Pressable style={styles.addToCartButton} onPress={onAddToCart}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </Pressable>
        </ScrollView>
      ) : (
        <>
          <Text>{mockProduct.title}</Text>
          <Carousel uris={[mockProduct.image, mockProduct.image, mockProduct.image]} />
          <Text>R$ {mockProduct.price}</Text>
          <Text>{mockProduct.description}</Text>
          <Text>Category: {mockProduct.category}</Text>
          <View style={styles.rowList}>
            <Text>{mockProduct.rating.count}</Text>
            <Image source={{ uri: '../../assets/images/icons8-star-50.png' }} style={{ width: 10, height: 10 }} />
            <Text>{mockProduct.rating.rate}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
  category: {
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    marginRight: 5,
  },
  starIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  addToCartButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});