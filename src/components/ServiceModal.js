// src/components/ServiceModal.js
import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { colors, typography, layout } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const ServiceModal = ({ visible, service, onClose }) => {
  if (!service) return null;

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          {/* Botão de fechar, renderizado primeiro mas com zIndex alto */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close-circle" size={32} color={colors.white} />
          </TouchableOpacity>

          <ScrollView>
            <Image source={service.detailImage} style={styles.modalImage} />
            <View style={styles.textContent}>
              <Text style={styles.title}>{service.title}</Text>
              <Text style={styles.description}>{service.longDescription}</Text>
            </View>
          </ScrollView>

          {/* O Ícone do Serviço fica por último (fora do ScrollView) 
              para flutuar por cima de tudo */}
          <View style={styles.iconContainer}>
            <Image source={service.icon} style={styles.icon} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 500,
    maxHeight: '90%',
    backgroundColor: colors.white,
    borderRadius: layout.borderRadius,
    ...layout.shadow,
    overflow: 'hidden', // Importante para o borderRadius
  },
  modalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  iconContainer: {
    position: 'absolute',
    top: 175,
    left: '50%',
    // Truque para centralizar com transform
    transform: [{ translateX: -35 }], 
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.white,
    ...layout.shadow,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.background,
    zIndex: 10, // <-- CORREÇÃO 1: zIndex alto para o ícone
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  textContent: {
    backgroundColor: colors.background,
    padding: 20,
    paddingTop: 55, // Espaço para o ícone
    alignItems: 'center',
    zIndex: 1, // <-- CORREÇÃO 2: zIndex baixo para o texto
  },
  title: {
    ...typography.title,
    fontSize: 22,
    color: colors.primaryDark,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    ...typography.body,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 99, // zIndex mais alto para o botão de fechar
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default ServiceModal;