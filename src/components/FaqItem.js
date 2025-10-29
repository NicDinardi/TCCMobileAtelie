import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, typography, layout } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const FaqItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.questionButton}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.questionText}>{question}</Text>
        <Ionicons
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={colors.primary}
        />
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.white,
    borderRadius: layout.borderRadius,
    ...layout.shadow,
    marginBottom: 15,
    width: '100%',
    overflow: 'hidden',
  },
  questionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  questionText: {
    fontFamily: typography.fontFamilyMedium,
    fontSize: 16,
    color: colors.primaryDark,
    flex: 1,
    marginRight: 10,
  },
  answerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  answerText: {
    fontFamily: typography.fontFamily,
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
  },
});

export default FaqItem;