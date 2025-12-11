import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';

export default function ContactScreen() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', { nombre, email, mensaje });
    // Limpiar campos
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ponte en Contacto</Text>
        
        {/* Info de Contacto */}
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>📞</Text>
            <View>
              <Text style={styles.contactLabel}>Teléfono</Text>
              <Text style={styles.contactText}>+507 6224-4455</Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>✉️</Text>
            <View>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactText}>info@securenetpro.com</Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>📍</Text>
            <View>
              <Text style={styles.contactLabel}>Oficina</Text>
              <Text style={styles.contactText}>Av. Principal 123, Piso 10</Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>🕐</Text>
            <View>
              <Text style={styles.contactLabel}>Horario</Text>
              <Text style={styles.contactText}>Lunes - Viernes: 8am - 6pm</Text>
            </View>
          </View>
        </View>

        {/* Formulario */}
        <View style={styles.form}>
          <Text style={styles.formTitle}>Envíanos un Mensaje</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Tu Nombre"
            placeholderTextColor={COLORS.textLight}
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Tu Email"
            placeholderTextColor={COLORS.textLight}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Tu Mensaje"
            placeholderTextColor={COLORS.textLight}
            value={mensaje}
            onChangeText={setMensaje}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Enviar Mensaje</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 24,
  },
  contactInfo: {
    marginBottom: 24,
  },
  contactItem: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  contactIcon: {
    fontSize: 24,
  },
  contactLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.accentColorCyan,
    marginBottom: 4,
  },
  contactText: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  form: {
    backgroundColor: COLORS.secondaryColor,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.accentColorBlue,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: COLORS.primaryColor,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 8,
    padding: 12,
    color: COLORS.textDark,
    fontSize: 14,
    marginBottom: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: COLORS.accentColorBlue,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});