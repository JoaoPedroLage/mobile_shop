import React, { useState } from 'react';

import { StyleSheet, View, Text, TextInput, Image, Button } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { useCart } from '@/app/context/CartContext';

const OrderConfirmation = (totalValue: number) => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [products, setProducts] = useState([]);

  const {
    cart
  } = useCart();

  console.log(cart)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmação de Pedido</Text>
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Digite seu endereço"
        style={styles.input}
      />
      <Picker
        selectedValue={paymentMethod}
        onValueChange={setPaymentMethod}
        style={styles.picker}
      >
        <Picker.Item label="Pix" value="pix" />
        <Picker.Item label="Ticket" value="ticket" />
        <Picker.Item label="Credit Card" value="credit_card" />
      </Picker>
      <Text style={styles.title}>Order Summary</Text>
      {cart.map((product) => (
        <View key={product.id} style={styles.productItem}>
          <Image source={product.image} style={styles.productImage} />
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>R${product.price}</Text>
        </View>
      ))}
      <Text style={styles.total}>{totalValue}</Text>
      <Button title="Confirm Order" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productTitle: {
    fontSize: 16,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OrderConfirmation;
