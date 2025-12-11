// app/tabs/index.tsx
import React from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { COLORS } from "../../constants/Colors";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Conectividad y Seguridad de Clase Mundial</Text>
          <Text style={styles.heroSubtitle}>Soluciones confiables para centros comerciales</Text>

          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => router.push("/tabs/contacts")}
          >
            <Text style={styles.ctaButtonText}>Agendar Consulta Gratis</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>99.9%</Text>
          <Text style={styles.statLabel}>Disponibilidad</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>1000+</Text>
          <Text style={styles.statLabel}>Clientes</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>24/7</Text>
          <Text style={styles.statLabel}>Soporte</Text>
        </View>
      </View>

      {/* Características */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>¿Por Qué Elegirnos?</Text>

        <View style={styles.featuresGrid}>
          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>⭐</Text>
            <Text style={styles.featureTitle}>15+ Años</Text>
            <Text style={styles.featureText}>de experiencia</Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>💎</Text>
            <Text style={styles.featureTitle}>Tecnología</Text>
            <Text style={styles.featureText}>última generación</Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>📈</Text>
            <Text style={styles.featureTitle}>Escalable</Text>
            <Text style={styles.featureText}>crece contigo</Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>🛡️</Text>
            <Text style={styles.featureTitle}>Garantía</Text>
            <Text style={styles.featureText}>SLA garantizado</Text>
          </View>
        </View>
      </View>

      {/* CTA Final */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>¿Listo para comenzar?</Text>
        <Text style={styles.ctaSubtitle}>Contacta con nuestro equipo hoy</Text>

        <TouchableOpacity
          style={styles.ctaButtonLarge}
          onPress={() => router.push("/tabs/services")}
        >
          <Text style={styles.ctaButtonText}>Contáctanos Ahora</Text>
        </TouchableOpacity>
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
    fontWeight: "700",
    color: COLORS.accentColorBlue,
    textAlign: "center",
    marginBottom: 20,
  },

  hero: {
    backgroundColor: COLORS.secondaryColor,
    padding: 40,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.borderColor,
  },
  heroContent: {
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "white",
    textAlign: "center",
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 16,
    color: COLORS.textLight,
    textAlign: "center",
    marginBottom: 24,
  },
  ctaButton: {
    backgroundColor: COLORS.accentColorPurple,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 25,
  },
  ctaButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: COLORS.primaryColor,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.accentColorBlue,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 4,
  },

  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  featureCard: {
    width: "48%",
    backgroundColor: COLORS.secondaryColor,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.accentColorCyan,
    marginBottom: 4,
  },
  featureText: {
    fontSize: 11,
    color: COLORS.textLight,
    textAlign: "center",
  },

  ctaSection: {
    padding: 32,
    alignItems: "center",
    backgroundColor: COLORS.secondaryColor,
    marginTop: 20,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.accentColorBlue,
    marginBottom: 8,
  },
  ctaSubtitle: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 20,
  },
  ctaButtonLarge: {
    backgroundColor: COLORS.accentColorBlue,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
});
