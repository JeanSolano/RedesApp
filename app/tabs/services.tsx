import React from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { SERVICIOS, TESTIMONIOS } from '../../constants/Data';
import { ServiceCard } from '../../components/ServiceCard';
import { TestimonialCard } from '../../components/TestimonialCard';

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nuestros Servicios</Text>
        <FlatList
          data={SERVICIOS}
          renderItem={({ item }) => (
            <ServiceCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>

      {/* Testimonios */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Testimonios</Text>
        {TESTIMONIOS.map((item) => (
          <TestimonialCard
            key={item.id}
            stars={item.stars}
            text={item.text}
            avatar={item.avatar}
            company={item.company}
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
    marginBottom: 20,
  },
});