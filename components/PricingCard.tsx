import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colors';

interface PricingCardProps {
  icon: string;
  title: string;
  price: string;
  featured: boolean;
  features: string[];
}

export const PricingCard: React.FC<PricingCardProps> = ({
  icon,
  title,
  price,
  featured,
  features,
}) => {
  return (
    <View style={[styles.pricingCard, featured && styles.pricingCardFeatured]}>
      {featured && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>POPULAR</Text>
        </View>
      )}
      <Text style={styles.planIcon}>{icon}</Text>
      <Text style={styles.planTitle}>{title}</Text>
      <Text style={styles.planPrice}>
        {price}
        <Text style={styles.planPeriod}>/mes</Text>
      </Text>
      <View style={styles.planFeatures}>
        {features.map((feature, index) => (
          <View key={index} style={styles.planFeature}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.planFeatureText}>{feature}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={[styles.planButton, featured && styles.planButtonFeatured]}
      >
        <Text style={styles.planButtonText}>
          {price === 'Personalizado' ? 'Consultar' : 'Contratar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pricingCard: {
    backgroundColor: COLORS.secondaryColor,
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    position: 'relative',
  },
  pricingCardFeatured: {
    borderColor: COLORS.accentColorBlue,
    backgroundColor: 'rgba(0, 212, 255, 0.08)',
  },
  badge: {
    position: 'absolute',
    top: -12,
    alignSelf: 'center',
    backgroundColor: COLORS.accentColorPurple,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  badgeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },
  planIcon: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 12,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.accentColorBlue,
    textAlign: 'center',
    marginBottom: 8,
  },
  planPrice: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.accentColorBlue,
    textAlign: 'center',
    marginBottom: 16,
  },
  planPeriod: {
    fontSize: 14,
    color: COLORS.textLight,
  },
  planFeatures: {
    marginBottom: 16,
  },
  planFeature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  checkmark: {
    color: COLORS.successColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  planFeatureText: {
    fontSize: 12,
    color: COLORS.textDark,
  },
  planButton: {
    backgroundColor: COLORS.accentColorBlue,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  planButtonFeatured: {
    backgroundColor: COLORS.accentColorPurple,
  },
  planButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});