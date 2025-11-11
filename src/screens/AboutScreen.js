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
  require('../../assets/images/AroPipoca.jpg'),
  require('../../assets/images/AcessorioCoelho.jpg'),
  require('../../assets/images/Vestido 2.jpg'),
  require('../../assets/images/Vestido 3.jpg'),
  require('../../assets/images/Vestifo 1.jpg'),
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

        <Image
          source={require('../../assets/images/Costura2.jpg')}
          style={styles.profileImage}
        />

        <View style={styles.carouselContainer}>
          <Carousel
            loop
            width={carouselWidth}
            height={350}
            autoPlay={true}
            autoPlayInterval={4000}
            data={portfolioImages}
            scrollAnimationDuration={1000}
            renderItem={renderCarouselItem}
          />
        </View>

        <View style={styles.textCard}>
          <Text style={[styles.bodyText, { marginBottom: 15 }]}>
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
        </View>

        <Image
          source={require('../../assets/images/BannerTransp (1).png')}
          style={styles.decorativeImage}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundAlt,
  },
  container: {
    padding: layout.containerPadding,
    alignItems: 'center',
    paddingBottom: 50,
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
    marginBottom: 20, // Linha corrigida
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: colors.white,
    ...layout.shadow,
    marginBottom: 30,
  },
  carouselContainer: {
    width: carouselWidth,
    height: 350,
    borderRadius: layout.borderRadius,
    ...layout.shadow,
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
  textCard: {
    backgroundColor: colors.white,
    borderRadius: layout.borderRadius,
    padding: layout.containerPadding,
    ...layout.shadow,
    width: carouselWidth,
    marginTop: 20,
  },
  bodyText: {
    ...typography.body,
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    textAlign: 'justify',
  },
  decorativeImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    opacity: 0.3,
    marginTop: 30,
  },
});

export default AboutScreen;