import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { colors, typography, layout } from '../constants/theme';
import FaqItem from '../components/FaqItem';

const faqData = [
  {
    q: 'Quanto tempo demora um ajuste simples?',
    a: 'Ajustes simples, como bainhas ou apertar a cintura, geralmente ficam prontos em até 2 dias úteis. Para casos de urgência, por favor, entre em contato.',
  },
  {
    q: 'Vocês fazem criação de peças do zero?',
    a: 'Sim! Esse é o nosso serviço de "Criação Sob Medida". Você pode agendar um horário para conversarmos sobre sua ideia e criar uma peça exclusiva.',
  },
  {
    q: 'Quais formas de pagamento vocês aceitam?',
    a: 'Aceitamos Pix, dinheiro e cartões de débito e crédito. Para peças sob medida, pedimos um sinal de 50% no início do projeto.',
  },
  {
    q: 'Preciso levar o tecido para uma criação sob medida?',
    a: 'Você pode trazer o seu próprio tecido, ou podemos ir juntas a uma loja especializada para escolher o material ideal para o seu projeto.',
  },
];

const FaqScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>Dúvidas Frequentes</Text>
        <Text style={styles.sectionSubtitle}>Tire suas dúvidas</Text>

        <View style={styles.listContainer}>
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.q} answer={item.a} />
          ))}
        </View>
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
  listContainer: {
    width: '100%',
  },
});

export default FaqScreen;