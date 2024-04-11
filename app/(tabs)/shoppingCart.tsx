import { Product } from '@/interfaces/productInterface';

import { Link, router, useGlobalSearchParams } from 'expo-router';

import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';

import { useCart } from '../context/CartContext';

import CheckoutCard from '../../components/CheckoutProductCard';
import CheckoutButton from '@/components/ModalConfirmation';

export default function ShoppingCartScreen() {
  const { cart } = useCart();

  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    if (cart) {
      cart.length > 0 ? setIsCartEmpty(false) : setIsCartEmpty(true);

      setTotalValue(
        cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
      );
    }
  }, [cart]);

  return (
    <View style={styles.container}>
      {isCartEmpty ? (
        <EmptyCartSection />
      ) : (
        <CartItemsSection cart={cart} totalValue={totalValue} />
      )}
    </View>
  );
}

const EmptyCartSection = () => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{ uri: 'https://cdn.pixabay.com/photo/2014/04/02/17/03/shopping-cart-307772_1280.png' }}
    />
    <Text style={styles.text}>Your Cart is empty!</Text>
    <Text style={styles.text}>Start Shopping now!</Text>
    <View style={styles.button}>
      <Link href={{ pathname: "/(tabs)" }}>
        <Text style={styles.buttonText}>Shop</Text>
      </Link>
    </View>
  </View>
);

const CartItemsSection = ({ cart, totalValue }: any) => (
  <>
    {cart.map((product: Product | any, index: number| any) => (
      <CheckoutCard key={index} product={product} />
    ))}
    <CheckoutButton totalValue={totalValue} />
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: '20%',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  checkoutSection: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    bottom: 10
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
