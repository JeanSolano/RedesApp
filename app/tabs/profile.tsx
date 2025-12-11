import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <View style={styles.profileHeader}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileAvatarText}>SP</Text>
          </View>
          <Text style={styles.profileName}>SecureNet Pro</Text>
          <Text style={styles.profileTagline}>Tu Socio en Seguridad</Text>
        </View>

        {/* Opciones de Menú */}
        <View style={styles.menuList}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>👤</Text>
            <Text style={styles.menuText}>Mi Perfil</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>🔔</Text>
            <Text style={styles.menuText}>Notificaciones</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>📊</Text>
            <Text style={styles.menuText}>Mis Servicios</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>💳</Text>
            <Text style={styles.menuText}>Facturación</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>⚙️</Text>
            <Text style={styles.menuText}>Configuración</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>❓</Text>
            <Text style={styles.menuText}>Ayuda y Soporte</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuItem, styles.menuItemDanger]}>
            <Text style={styles.menuIcon}>🚪</Text>
            <Text style={[styles.menuText, styles.menuTextDanger]}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>

        {/* Info de la App */}
        <View style={styles.appInfo}>
          <Text style={styles.appInfoText}>Versión 1.0.0</Text>
          <Text style={styles.appInfoText}>© 2025 SecureNet Pro</Text>
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.accentColorPurple,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileAvatarText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.accentColorBlue,
    marginBottom: 4,
  },
  profileTagline: {
    fontSize: 14,
    color: COLORS.textLight,
  },
  menuList: {
    marginTop: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondaryColor,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  menuItemDanger: {
    borderColor: '#ff4444',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textDark,
    fontWeight: '500',
  },
  menuTextDanger: {
    color: '#ff4444',
  },
  menuArrow: {
    fontSize: 24,
    color: COLORS.textLight,
  },
  appInfo: {
    marginTop: 32,
    alignItems: 'center',
  },
  appInfoText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginBottom: 4,
  },
});