import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colors';

interface TestimonialCardProps {
  stars: number;
  text: string;
  avatar: string;
  company: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  stars,
  text,
  avatar,
  company,
}) => {
  return (
    <View style={styles.testimonioCard}>
      <View style={styles.testimonioStars}>
        {[...Array(stars)].map((_, i) => (
          <Text key={i} style={styles.star}>
            ⭐
          </Text>
        ))}
      </View>
      <Text style={styles.testimonioText}>{text}</Text>
      <View style={styles.testimonioAutor}>
        <View style={styles.testimonioAvatar}>
          <Text style={styles.testimonioAvatarText}>{avatar}</Text>
        </View>
        <Text style={styles.testimonioCompany}>{company}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  testimonioCard: {
    backgroundColor: COLORS.secondaryColor,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  testimonioStars: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'center',
  },
  star: {
    fontSize: 16,
  },
  testimonioText: {
    fontSize: 13,
    color: COLORS.textLight,
    fontStyle: 'italic',
    marginBottom: 12,
    textAlign: 'center',
  },
  testimonioAutor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  testimonioAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.accentColorPurple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  testimonioAvatarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  testimonioCompany: {
    fontSize: 12,
    color: COLORS.accentColorCyan,
    fontWeight: '600',
  },
});