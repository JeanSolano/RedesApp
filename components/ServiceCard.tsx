import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colors';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  image,
}) => {
  return (
    <View style={styles.serviceCard}>
      <Image source={{ uri: image }} style={styles.serviceImage} />
      <View style={styles.serviceContent}>
        <Text style={styles.serviceIcon}>{icon}</Text>
        <Text style={styles.serviceTitle}>{title}</Text>
        <Text style={styles.serviceDescription}>{description}</Text>
        <TouchableOpacity style={styles.serviceButton}>
          <Text style={styles.serviceButtonText}>Más Información</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  serviceCard: {
    backgroundColor: COLORS.secondaryColor,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  serviceImage: {
    width: '100%',
    height: 180,
  },
  serviceContent: {
    padding: 16,
    alignItems: 'center',
  },
  serviceIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.accentColorCyan,
    marginBottom: 8,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 13,
    color: COLORS.textLight,
    textAlign: 'center',
    marginBottom: 12,
  },
  serviceButton: {
    backgroundColor: COLORS.accentColorBlue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  serviceButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
});