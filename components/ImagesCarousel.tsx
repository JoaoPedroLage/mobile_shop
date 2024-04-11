import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

interface CarouselProps {
  uris: string[]; // Array de URLs das imagens
}

const Carousel = ({ uris }: CarouselProps) => {
  return (
    <Swiper style={styles.wrapper} showsButtons loop={false}>
      {uris.map((uri, index) => (
        <Image
          key={index} // Chave única para cada imagem
          style={styles.slide}
          source={{ uri }} // Passando a URI da imagem como source
        />
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 200, // Altura do carrossel (ajuste conforme necessário)
  },
  slide: {
    flex: 1,
    resizeMode: 'cover', // Ajustar o modo de redimensionamento conforme necessário
  },
});

export default Carousel;
