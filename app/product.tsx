import React from 'react';
import { StyleSheet, Pressable, Alert, Image, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import Carousel from '@/components/ImagesCarousel';
import { useCart } from './context/CartContext';

export default function ProductScreen() {
  const { addToCart, selectedProduct } = useCart();

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
          onPress: () => {},
        },
      ],
    );
    addToCart(selectedProduct || mockProduct);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{selectedProduct?.title || mockProduct.title}</Text>
      <Carousel uris={[selectedProduct?.image, selectedProduct?.image, selectedProduct?.image || mockProduct.image]} />
      <Text style={styles.price}>R$ {selectedProduct?.price.toFixed(2) || mockProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct?.description || mockProduct.description}</Text>
      <Text style={styles.category}>Category: {selectedProduct?.category || mockProduct.category}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{selectedProduct?.rating.count || mockProduct.rating.count}</Text>
        <Image source={{ uri: '../../assets/images/icons8-star-50.png' }} style={styles.starIcon} />
        <Text style={styles.ratingText}>{selectedProduct?.rating.rate || mockProduct.rating.rate}</Text>
      </View>
      <Pressable style={styles.addToCartButton} onPress={onAddToCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
  },
  category: {
    marginBottom: 20,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
