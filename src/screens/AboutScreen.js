import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions, 
} from 'react-native';
import { colors, typography, layout } from '../constants/theme';
import Carousel from 'react-native-reanimated-carousel';


const screenWidth = Dimensions.get('window').width;

const carouselWidth = screenWidth - layout.containerPadding * 2;


const portfolioImages = [
  require('../../assets/images/Junina1Tiny.jpg'),
  require('../../assets/images/Vestido1Tiny.jpg'),
  require('../../assets/images/Junina2Tiny.jpg'),
  require('../../assets/images/Vestido2Tiny.jpg'),
];

const AboutScreen = () => {

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item} style={styles.carouselImage} />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>Nossa História</Text>
        <Text style={styles.sectionSubtitle}>Feito com alma e coração</Text>

       
        <View style={styles.carouselContainer}>
          <Carousel
            loop
            width={carouselWidth}
            height={250}
            autoPlay={true}
            autoPlayInterval={4000}
            data={portfolioImages}
            scrollAnimationDuration={1000}
            renderItem={renderCarouselItem}
          />
        </View>

        
        <Text style={styles.bodyText}>
          Olá, eu sou a Rai! Minha paixão é transformar tecidos em peças que
          contam histórias. O "Costuras da Rai" nasceu do sonho de criar roupas
          que não apenas vistam bem, mas que também celebrem a individualidade
          de cada pessoa.
        </Text>
        <Text style={styles.bodyText}>
          Acredito no poder da costura artesanal, onde cada ponto é dado com
          cuidado e cada acabamento é pensado para ser perfeito. Do ajuste mais
          simples ao figurino de balé mais elaborado, minha missão é entregar
          qualidade, exclusividade e um caimento impecável.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: layout.containerPadding,
  },
  sectionTitle: {
    fontFamily: typography.fontFamilyMedium,
    fontSize: 18,
    color: colors.primary,
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontFamily: typography.fontFamilyBold,
    fontSize: 26,
    color: colors.primaryDark,
    textAlign: 'center',
    marginBottom: 30,
  },
  // Estilos do Carrossel
  carouselContainer: {
    width: carouselWidth,
    height: 250,
    borderRadius: layout.borderRadius,
    ...layout.shadow,
    marginBottom: 30,
    overflow: 'hidden',
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  // Estilos do Texto
  bodyText: {
    ...typography.body,
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'justify',
  },
});

export default AboutScreen;