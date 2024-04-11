import React, { useState } from 'react';

import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import { useCart } from '@/app/context/CartContext';

import { Product } from '@/interfaces/productInterface';

const CheckoutCard = (product: Product | any) => {
  const {
    removeFromCart,
    updateQuantityFromCart
  } = useCart();

  const [quantity, setQuantity] = useState(Number(product.product.quantity) ? product.product.quantity : 1);

  return (
    <View key={product.product.id} style={styles.productContainer}>
      <Pressable onPress={() => removeFromCart(product.product.id)}>
        <Image style={styles.removeButton} source={{ uri: 'https://cdn.pixabay.com/photo/2017/11/10/05/24/delete-2935433_1280.png' }} />
      </Pressable>
      <Image style={styles.image} source={{ uri: product.product.image }} />
      <View style={styles.productDetails}>
        <Text>{product.product.title}</Text>
        <Text>{product.product.price}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Pressable onPress={() => { setQuantity(quantity - 1); updateQuantityFromCart(product.product.id, false) }}>
            <Text>-</Text>
          </Pressable>
          <Text style={{ marginHorizontal: 10 }}>{quantity}</Text>
          <Pressable onPress={() => { setQuantity(quantity + 1); updateQuantityFromCart(product.product.id, true) }}>
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically within the row
    marginBottom: 10, // Add spacing between product items
  },
  productRow: {
    flex: 1, // Make the row take up most of the space in the container
    flexDirection: 'row',
  },
  removeButton: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10, // Espaço entre o botão e a imagem
  },
  productDetails: {
    marginLeft: 10, // Espaço entre a imagem e os detalhes
    flex: 1, // Faz o container ocupar o espaço restante na linha
    justifyContent: 'space-between', // Alinha o título e o preço verticalmente
  }
});

export default CheckoutCard;
