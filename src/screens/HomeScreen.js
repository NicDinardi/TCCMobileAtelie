// src/screens/HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { colors, typography, layout } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import AppButton from '../components/AppButton';

const HomeScreen = () => {
  const openWhatsApp = () => {
    Linking.openURL(
      'whatsapp://send?phone=19999437526&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.'
    );
  };

  const openCalendly = () => {
    alert('Abrir agendamento!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../../assets/images/Logo2.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Seu Estilo Sob <Text style={styles.titleHighlight}>Medida</Text>
        </Text>

        <Text style={styles.description}>
          Paixão em cada ponto, estilo em cada detalhe.
        </Text>

        <View style={styles.buttonContainer}>
          <AppButton title="Agende seu Horario" onPress={openCalendly} />

          <TouchableOpacity
            style={styles.whatsappButton}
            onPress={openWhatsApp}
          >
            <Ionicons name="logo-whatsapp" size={20} color={colors.primaryDark} />
            <Text style={styles.whatsappButtonText}>(19) 99943-7526</Text>
          </TouchableOpacity>
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
    flexGrow: 1,
    padding: layout.containerPadding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '80%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    ...typography.title,
    textAlign: 'center',
    fontSize: 32,
    color: colors.primaryDark,
  },
  titleHighlight: {
    color: colors.primary,
  },
  description: {
    ...typography.body,
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 15,
    color: colors.textLight,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  whatsappButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: layout.borderRadius,
    ...layout.shadow,
    marginTop: 10,
  },
  whatsappButtonText: {
    fontFamily: typography.fontFamilyMedium,
    color: colors.primaryDark,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default HomeScreen;