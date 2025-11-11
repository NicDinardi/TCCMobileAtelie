// src/screens/ServicesScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { colors, typography, layout } from '../constants/theme';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';

const servicesData = [
  {
    id: '1',
    title: 'Criação Sob Medida',
    description: 'Desenvolvimento de peças únicas, desde o design inicial.',
    icon: require('../../assets/images/IconeTesoura.png'),
    longDescription:
      'Transformamos suas ideias em realidade. Este serviço é perfeito para quem busca uma peça exclusiva, com caimento impecável e que reflita sua personalidade.',
    detailImage: require('../../assets/images/Vestido 3.jpg'),
  },
  {
    id: '2',
    title: 'Ajustes e Reparos',
    description: 'Ajustes de caimento, bainhas, consertos e customização.',
    icon: require('../../assets/images/IconeAlfinete.png'),
    longDescription:
      'Dê uma nova vida às suas roupas favoritas! Realizamos todos os tipos de ajustes, como bainhas, apertar ou alargar peças, troca de zíperes e reparos em geral.',
    detailImage: require('../../assets/images/Vizualizaer.jpg'),
  },
  {
    id: '33',
    title: 'Roupas de Balé',
    description: 'Criação de figurinos e tutus para apresentações de dança.',
    icon: require('../../assets/images/IconeVestido.png'),
    longDescription:
      'Desenvolvemos figurinos e tutus sob medida para apresentações de balé e dança, garantindo conforto, beleza e movimento perfeitos para o palco.',
    detailImage: require('../../assets/images/Bale1.jpg'), 
  },
  {
    id: '4',
    title: 'Fantasia e acessórios',
    description: 'Criação e confecção de artigos festivos.',
    icon: require('../../assets/images/IconeMaquina.png'),
    longDescription:
      'Dê vida à sua imaginação! Criamos fantasias personalizadas para festas temáticas, carnaval e eventos, além de acessórios únicos.',
    detailImage: require('../../assets/images/Acessorio1.jpg'), 
  },
];

const ServicesScreen = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardPress = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
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
              onPress={() => handleCardPress(service)}
            />
          ))}
        </View>
      </ScrollView>

      <ServiceModal
        visible={selectedService !== null}
        service={selectedService}
        onClose={handleCloseModal}
      />
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