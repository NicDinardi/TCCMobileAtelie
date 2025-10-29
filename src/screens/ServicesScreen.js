// src/screens/ServicesScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { colors, typography, layout } from '../constants/theme';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
  {
    id: '1',
    title: 'Criação Sob Medida',
    description: 'Desenvolvimento de peças únicas, desde o design inicial.',
    icon: require('../../assets/images/IconeTesoura.png'),
  },
  {
    id: '2',
    title: 'Ajustes e Reparos',
    description: 'Ajustes de caimento, bainhas, consertos e customização.',
    icon: require('../../assets/images/IconeAlfinete.png'),
  },
  {
    id: '3',
    title: 'Roupas de Balé',
    description: 'Criação de figurinos e tutus para apresentações de dança.',
    icon: require('../../assets/images/IconeVestido.png'),
  },
  {
    id: '4',
    title: 'Fantasia e acessórios',
    description: 'Criação e confecção de artigos festivos.',
    icon: require('../../assets/images/IconeMaquina.png'),
  },
];

const ServicesScreen = () => {
  const handleCardPress = (title) => {
    alert(`Abrir detalhes para: ${title}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>Serviços</Text>
        <Text style={styles.sectionSubtitle}>Conheça meu serviço</Text>

        <View style={styles.cardContainer}>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconSource={service.icon}
              onPress={() => handleCardPress(service.title)}
            />
          ))}
        </View>
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
  cardContainer: {
    width: '100%',
  },
});

export default ServicesScreen;