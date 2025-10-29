import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors, typography, layout } from '../constants/theme';

const ServiceCard = ({ iconSource, title, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={iconSource} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: layout.borderRadius,
    padding: 20,
    ...layout.shadow,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#fbeee4',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: typography.fontFamilyMedium,
    fontSize: 16,
    color: colors.primaryDark,
    marginBottom: 4,
  },
  description: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 20,
  },
});

export default ServiceCard;