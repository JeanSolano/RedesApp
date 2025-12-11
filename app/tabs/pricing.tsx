import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { PLANES } from '../../constants/Data';
import { PricingCard } from '../../components/PricingCard';

export default function PricingScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Planes Personalizados</Text>
        <Text style={styles.sectionSubtitle}>Elige el plan que mejor se adapte</Text>
        
        {PLANES.map((plan) => (
          <PricingCard
            key={plan.id}
            icon={plan.icon}
            title={plan.title}
            price={plan.price}
            featured={plan.featured}
            features={plan.features}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.accentColorBlue,
    textAlign: 'center',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: 'center',
    marginBottom: 24,
  },
});