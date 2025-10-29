import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, typography, layout } from '../constants/theme';

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: layout.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    ...layout.shadow,
    marginVertical: 8,
    width: '100%',
  },
  text: {
    fontFamily: typography.fontFamilyMedium,
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default AppButton;