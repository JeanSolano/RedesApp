import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Dimensions, FlatList, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Colores del CSS
const COLORS = {
  primaryColor: '#0a0e27',
  secondaryColor: '#1a1a3f',
  accentColorBlue: '#00d4ff',
  accentColorPurple: '#b100ff',
  accentColorCyan: '#00ffff',
  lightBg: '#0d1b2a',
  darkBg: '#050810',
  textDark: '#e0e0ff',
  textLight: '#a0a0ff',
  borderColor: '#7100ff',
  successColor: '#00ff88',
};

// Datos de servicios
const SERVICIOS = [
  {
    id: '1',
    icon: 'wifi',
    title: 'Internet de Alta Velocidad',
    description: 'Conexión estable y rápida para todas las áreas de tu centro comercial. Ancho de banda ilimitado y redundancia de líneas.',
    features: ['Velocidades hasta 1 Gbps', '99.9% Disponibilidad', 'Soporte 24/7'],
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?w=500&h=300&fit=crop',
  },
  {
    id: '2',
    icon: 'camera',
    title: 'Monitoreo de Cámaras',
    description: 'Sistema de vigilancia en tiempo real con cobertura total. Grabación continua y almacenamiento en la nube.',
    features: ['4K Ultra HD', 'Almacenamiento 365 días', 'Acceso remoto'],
    image: 'https://images.pexels.com/photos/9301020/pexels-photo-9301020.jpeg',
  },
  {
    id: '3',
    icon: 'eye',
    title: 'Visión de Seguridad',
    description: 'Tecnología IA para detección de anomalías y alertas en tiempo real. Protección proactiva de tu centro comercial.',
    features: ['Detección de movimientos', 'Reconocimiento facial', 'Alertas instantáneas'],
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?w=500&h=300&fit=crop',
  },
  {
    id: '4',
    icon: 'lock',
    title: 'Ciberseguridad',
    description: 'Protección integral contra amenazas digitales. Firewall avanzado y filtrado de contenido.',
    features: ['Protección DDoS', 'Cifrado end-to-end', 'Auditorías regulares'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop',
  },
  {
    id: '5',
    icon: 'headset',
    title: 'Soporte Técnico',
    description: 'Equipo especializado disponible 24/7 para resolver cualquier incidencia en tiempo mínimo.',
    features: ['Respuesta en < 15 min', 'Técnicos certificados', 'Mantenimiento preventivo'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
  },
  {
    id: '6',
    icon: 'chart-line',
    title: 'Analytics y Reportes',
    description: 'Dashboards intuitivos con métricas en tiempo real. Reportes personalizados para toma de decisiones.',
    features: ['Reportes automáticos', 'API integrada', 'Exportación de datos'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
  },
];

// Datos de características
const CARACTERISTICAS = [
  {
    id: '1',
    number: '01',
    icon: 'star-circle',
    title: 'Experiencia Comprobada',
    description: 'Más de 15 años en el sector con clientes en toda Latinoamérica',
  },
  {
    id: '2',
    number: '02',
    icon: 'chip',
    title: 'Tecnología Última Generación',
    description: 'Sistemas de punta con actualizaciones constantes',
  },
  {
    id: '3',
    number: '03',
    icon: 'arrow-up-bold',
    title: 'Escalabilidad',
    description: 'Infraestructura que crece con tu negocio',
  },
  {
    id: '4',
    number: '04',
    icon: 'shield',
    title: 'Garantía de Confiabilidad',
    description: 'SLA garantizado con compensación por inactividad',
  },
];

// Datos de estadísticas
const STATS = [
  { id: '1', number: '99.9%', label: 'Disponibilidad de Servicio' },
  { id: '2', number: '1000+', label: 'Clientes Satisfechos' },
  { id: '3', number: '365', label: 'Días de Soporte Anual' },
  { id: '4', number: '50+', label: 'Profesionales Especializados' },
];

// Datos de testimonios
const TESTIMONIOS = [
  {
    id: '1',
    stars: 5,
    text: 'Excelente servicio, los técnicos son muy profesionales y la red es súper estable.',
    avatar: 'CC',
    company: 'Centro Comercial Plaza Mayor',
    position: 'Gerente de Operaciones',
  },
  {
    id: '2',
    stars: 5,
    text: 'La solución de cámaras nos ha permitido mejorar significativamente la seguridad.',
    avatar: 'MP',
    company: 'Mall Providencia',
    position: 'Director de Seguridad',
  },
  {
    id: '3',
    stars: 5,
    text: 'Soporte excepcional. Cada vez que tenemos un problema, lo resuelven en minutos.',
    avatar: 'EX',
    company: 'Expo Centro Comercial',
    position: 'Administrador de TI',
  },
];

// Datos de planes de precios
const PLANES = [
  {
    id: '1',
    icon: 'cube',
    title: 'Básico',
    price: '499',
    featured: false,
    features: ['Internet 100 Mbps', '4 Cámaras 4K', 'Monitoreo básico', 'Soporte de oficina'],
  },
  {
    id: '2',
    icon: 'rocket',
    title: 'Profesional',
    price: '999',
    featured: true,
    features: ['Internet 500 Mbps', '16 Cámaras 4K', 'IA y Analytics', 'Soporte 24/7', 'Redundancia'],
  },
  {
    id: '3',
    icon: 'crown',
    title: 'Personalizado',
    price: 'Personalizado',
    featured: false,
    features: ['Internet 1 Gbps+', 'Cámaras ilimitadas', 'Suite completa', 'Soporte dedicado', 'Customización'],
  },
];

// Datos de galería
const GALLERY = [
  {
    id: '1',
    image: 'https://revistaseguridad360.com/wp-content/uploads/2022/10/camaras-de-seguridad-eclipsesecurity.png',
    title: 'Sistemas de Vigilancia',
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
    title: 'Monitoreo en Tiempo Real',
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
    title: 'Centros de Datos',
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/7567426/pexels-photo-7567426.jpeg',
    title: 'Dashboard de Análisis',
  },
];

export default function App() {
  const windowHeight = Dimensions.get('window').height;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar style="light" />

      {/* ========== HERO SECTION ========== */}
      <View style={[styles.hero, { minHeight: windowHeight * 0.8 }]}>
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg' }}
          style={styles.heroBackgroundImage}
          imageStyle={styles.heroImageStyle}
        >
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <View style={styles.logo}>
              <MaterialCommunityIcons name="shield-check" size={20} color="white" />
              <Text style={styles.logoText}>SecureNet Pro </Text>
            </View>
              <Text style={styles.heroTitle}>Conectividad y Seguridad de Clase Mundial</Text>
            <Text style={styles.heroSubtitle}>Soluciones confiables para centros comerciales modernos</Text>
          </View>
        </ImageBackground>
      </View>

      {/* ========== SERVICIOS SECTION ========== */}
      <View style={styles.servicios}>
        <Text style={styles.sectionTitle}>Nuestros Servicios</Text>
        <FlatList
          data={SERVICIOS}
          renderItem={({ item }) => (
            <View style={styles.serviceCard}>
              <Image source={{ uri: item.image }} style={styles.serviceImage} />
              <View style={styles.serviceIconContainer}>
                <MaterialCommunityIcons name={item.icon} size={40} color={COLORS.accentColorBlue} />
              </View>
              <Text style={styles.serviceTitle}>{item.title}</Text>
              <Text style={styles.serviceDescription}>{item.description}</Text>
              <View style={styles.serviceFeatures}>
                {item.features.map((feature, index) => (
                  <View key={index} style={styles.featureItem}>
                    <MaterialCommunityIcons name="check" size={16} color={COLORS.successColor} />
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.serviciosGrid}
        />
      </View>

      {/* ========== CARACTERÍSTICAS SECTION ========== */}
      <View style={styles.caracteristicas}>
        <Text style={styles.sectionTitle}>¿Por Qué Elegirnos?</Text>
        <FlatList
          data={CARACTERISTICAS}
          renderItem={({ item }) => (
            <View style={styles.caracteristicaItem}>
              <MaterialCommunityIcons name={item.icon} size={40} color={COLORS.accentColorPurple} />
              <Text style={styles.caracteristicaNumber}>{item.number}</Text>
              <Text style={styles.caracteristicaTitle}>{item.title}</Text>
              <Text style={styles.caracteristicaDescription}>{item.description}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.caracteristicasGrid}
        />
      </View>

      {/* ========== STATS SECTION ========== */}
      <View style={styles.stats}>
        <FlatList
          data={STATS}
          renderItem={({ item }) => (
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{item.number}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          numColumns={2}
          contentContainerStyle={styles.statsGrid}
        />
      </View>

      {/* ========== TESTIMONIOS SECTION ========== */}
      <View style={styles.testimonios}>
        <Text style={styles.sectionTitle}>Lo Que Dicen Nuestros Clientes</Text>
        <FlatList
          data={TESTIMONIOS}
          renderItem={({ item }) => (
            <View style={styles.testimonioCard}>
              <View style={styles.testimonioStars}>
                {[...Array(item.stars)].map((_, i) => (
                  <MaterialCommunityIcons key={i} name="star" size={18} color="#ffff00" />
                ))}
              </View>
              <Text style={styles.testimonioText}>{item.text}</Text>
              <View style={styles.testimonioAutor}>
                <View style={styles.testimonioAvatar}>
                  <Text style={styles.testimonioAvatarText}>{item.avatar}</Text>
                </View>
                <View>
                  <Text style={styles.testimonioCompany}>{item.company}</Text>
                  <Text style={styles.testimonioPosition}>{item.position}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.testimoniosGrid}
        />
      </View>

      {/* ========== PRICING SECTION ========== */}
      <View style={styles.pricing}>
        <Text style={styles.sectionTitle}>Planes Personalizados</Text>
        <Text style={styles.pricingSubtitle}>Elige el plan que mejor se adapte a tu centro comercial</Text>
        <FlatList
          data={PLANES}
          renderItem={({ item }) => (
            <View style={[styles.pricingCard, item.featured && styles.pricingCardFeatured]}>
              {item.featured && <Text style={styles.pricingBadge}>POPULAR</Text>}
              <View style={styles.pricingIconBg}>
                <MaterialCommunityIcons name={item.icon} size={40} color="white" />
              </View>
              <Text style={styles.pricingTitle}>{item.title}</Text>
              <Text style={styles.pricingPrice}>{item.price}<Text style={styles.pricingPeriod}>/mes</Text></Text>
              <View style={styles.pricingFeatures}>
                {item.features.map((feature, index) => (
                  <View key={index} style={styles.pricingFeature}>
                    <MaterialCommunityIcons name="check" size={16} color={COLORS.successColor} />
                    <Text style={styles.pricingFeatureText}>{feature}</Text>
                  </View>
                ))}
              </View>
              <TouchableOpacity style={styles.pricingButton}>
                <Text style={styles.pricingButtonText}>{item.featured ? 'Contratar' : item.price === 'Personalizado' ? 'Consultar' : 'Contratar'}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.pricingGrid}
        />
      </View>

      {/* ========== GALLERY SECTION ========== */}
      <View style={styles.gallery}>
        <Text style={styles.sectionTitle}>Nuestra Infraestructura en Acción</Text>
        <FlatList
          data={GALLERY}
          renderItem={({ item }) => (
            <View style={styles.galleryItem}>
              <Image source={{ uri: item.image }} style={styles.galleryImage} />
              <View style={styles.galleryOverlay}>
                <Text style={styles.galleryTitle}>{item.title}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          numColumns={2}
          contentContainerStyle={styles.galleryGrid}
        />
      </View>

      {/* ========== CTA SECTION ========== */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaSectionTitle}>Protege tu Centro Comercial Hoy Mismo</Text>
        <Text style={styles.ctaSectionSubtitle}>Contacta con nuestro equipo para una consulta gratuita sin compromiso</Text>
        <TouchableOpacity style={styles.ctaButtonLarge}>
          <Text style={styles.ctaButtonLargeText}>Agendar Consulta Gratis</Text>
        </TouchableOpacity>
      </View>

      {/* ========== CONTACTO SECTION ========== */}
      <View style={styles.contacto}>
        <Text style={styles.sectionTitle}>Ponte en Contacto</Text>
        
        <View style={styles.contactoInfo}>
          <View style={styles.infoItem}>
            <MaterialCommunityIcons name="phone" size={24} color={COLORS.accentColorBlue} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Teléfono</Text>
              <Text style={styles.infoText}>+507 6224-4455</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <MaterialCommunityIcons name="email" size={24} color={COLORS.accentColorBlue} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoText}>info@securenetpro.com</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <MaterialCommunityIcons name="map-marker" size={24} color={COLORS.accentColorBlue} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Oficina</Text>
              <Text style={styles.infoText}>Av. Principal 123, Piso 10</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <MaterialCommunityIcons name="clock" size={24} color={COLORS.accentColorBlue} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Horario</Text>
              <Text style={styles.infoText}>Lunes - Viernes: 8am - 6pm</Text>
            </View>
          </View>
        </View>

        <View style={styles.contactoForm}>
          <View style={styles.formInput}>
            <Text style={styles.formLabel}>Tu Nombre</Text>
          </View>
          <View style={styles.formInput}>
            <Text style={styles.formLabel}>Tu Email</Text>
          </View>
          <View style={styles.formInput}>
            <Text style={styles.formLabel}>Nombre del Centro Comercial</Text>
          </View>
          <View style={[styles.formInput, styles.formTextarea]}>
            <Text style={styles.formLabel}>Tu Mensaje</Text>
          </View>
          <TouchableOpacity style={styles.formSubmit}>
            <Text style={styles.formSubmitText}>Enviar Mensaje</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ========== FOOTER ========== */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>Sobre Nosotros</Text>
            <Text style={styles.footerText}>Líderes en soluciones de conectividad y seguridad para centros comerciales modernos.</Text>
          </View>

          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>Enlaces Rápidos</Text>
            <Text style={styles.footerLink}>Inicio</Text>
            <Text style={styles.footerLink}>Servicios</Text>
            <Text style={styles.footerLink}>Características</Text>
            <Text style={styles.footerLink}>Contacto</Text>
          </View>

          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>Legal</Text>
            <Text style={styles.footerLink}>Política de Privacidad</Text>
            <Text style={styles.footerLink}>Términos de Servicio</Text>
            <Text style={styles.footerLink}>Cookies</Text>
          </View>

          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>Síguenos</Text>
            <View style={styles.socialLinks}>
              <MaterialCommunityIcons name="facebook" size={24} color={COLORS.accentColorBlue} />
              <MaterialCommunityIcons name="twitter" size={24} color={COLORS.accentColorBlue} />
              <MaterialCommunityIcons name="linkedin" size={24} color={COLORS.accentColorBlue} />
              <MaterialCommunityIcons name="instagram" size={24} color={COLORS.accentColorBlue} />
            </View>
          </View>
        </View>

        <View style={styles.footerBottom}>
          <Text style={styles.footerBottomText}>© 2025 SecureNet Pro. Todos los derechos reservados.</Text>
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

  // ========== NAVBAR ==========
  navbar: {
    backgroundColor: COLORS.primaryColor,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // ========== HERO SECTION ==========
  hero: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  heroBackgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImageStyle: {
    resizeMode: 'cover',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 14, 39, 0.95)',
  },
  heroContent: {
    position: 'absolute',
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.95)',
    textAlign: 'center',
    marginBottom: 24,
  },
  ctaButton: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 50,
    backgroundColor: COLORS.accentColorPurple,
    borderWidth: 2,
    borderColor: COLORS.accentColorCyan,
    shadowColor: COLORS.accentColorPurple,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  ctaButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primaryColor,
    textAlign: 'center',
  },

  // ========== SERVICIOS SECTION ==========
  servicios: {
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.primaryColor,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
    color: COLORS.accentColorBlue,
  },
  serviciosGrid: {
    gap: 16,
  },
  serviceCard: {
    backgroundColor: 'rgba(26, 10, 63, 0.5)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    alignItems: 'center',
    shadowColor: COLORS.accentColorPurple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  serviceImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },
  serviceIconContainer: {
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.accentColorCyan,
    textAlign: 'center',
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 13,
    color: COLORS.textLight,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 18,
  },
  serviceFeatures: {
    gap: 8,
    width: '100%',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
  },
  featureText: {
    fontSize: 12,
    color: COLORS.textLight,
  },

  // ========== CARACTERÍSTICAS SECTION ==========
  caracteristicas: {
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.primaryColor,
  },
  caracteristicasGrid: {
    gap: 16,
  },
  caracteristicaItem: {
    backgroundColor: 'rgba(26, 10, 63, 0.4)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    alignItems: 'center',
    shadowColor: COLORS.accentColorPurple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  caracteristicaNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.accentColorBlue,
    marginVertical: 8,
  },
  caracteristicaTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.accentColorCyan,
    textAlign: 'center',
    marginBottom: 8,
  },
  caracteristicaDescription: {
    fontSize: 12,
    color: COLORS.textLight,
    textAlign: 'center',
  },

  // ========== STATS SECTION ==========
  stats: {
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.primaryColor,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor,
  },
  statsGrid: {
    gap: 16,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.accentColorBlue,
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textLight,
    textAlign: 'center',
  },

  // ========== TESTIMONIOS SECTION ==========
  testimonios: {
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.primaryColor,
  },
  testimoniosGrid: {
    gap: 16,
  },
  testimonioCard: {
    backgroundColor: 'rgba(26, 10, 63, 0.5)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    shadowColor: COLORS.accentColorPurple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  testimonioStars: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 12,
    justifyContent: 'center',
  },
  testimonioText: {
    fontSize: 13,
    color: COLORS.textLight,
    fontStyle: 'italic',
    marginBottom: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
  testimonioAutor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  testimonioAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
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
    fontWeight: '600',
    color: COLORS.accentColorCyan,
  },
  testimonioPosition: {
    fontSize: 11,
    color: COLORS.textLight,
  },

  // ========== PRICING SECTION ==========
  pricing: {
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.primaryColor,
  },
  pricingSubtitle: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: 'center',
    marginBottom: 24,
  },
  pricingGrid: {
    gap: 16,
  },
  pricingCard: {
    backgroundColor: 'rgba(26, 10, 63, 0.5)',
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    shadowColor: COLORS.accentColorPurple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  pricingCardFeatured: {
    borderColor: COLORS.accentColorBlue,
    backgroundColor: 'rgba(0, 212, 255, 0.08)',
  },
  pricingBadge: {
    position: 'absolute',
    top: -12,
    alignSelf: 'center',
    backgroundColor: COLORS.accentColorPurple,
    color: 'white',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    fontSize: 11,
    fontWeight: '700',
  },
  pricingIconBg: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 212, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'center',
  },
  pricingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.accentColorBlue,
    textAlign: 'center',
    marginBottom: 12,
  },
  pricingPrice: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.accentColorBlue,
    textAlign: 'center',
    marginBottom: 16,
  },
  pricingPeriod: {
    fontSize: 14,
    color: COLORS.textLight,
  },
  pricingFeatures: {
    marginBottom: 16,
    gap: 8,
  },
  pricingFeature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
  },
  pricingFeatureText: {
    fontSize: 12,
    color: COLORS.textDark,
  },
  pricingButton: {
    backgroundColor: COLORS.accentColorBlue,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  pricingButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },

  // ========== GALLERY SECTION ==========
  gallery: {
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.primaryColor,
  },
  galleryGrid: {
    gap: 16,
  },
  galleryItem: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: COLORS.accentColorPurple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  galleryOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(30, 58, 138, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  // ========== CTA SECTION ==========
  ctaSection: {
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.secondaryColor,
    alignItems: 'center',
  },
  ctaSectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: 12,
  },
  ctaSectionSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.95)',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButtonLarge: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    backgroundColor: COLORS.accentColorBlue,
    borderRadius: 50,
    shadowColor: COLORS.accentColorBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  ctaButtonLargeText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },

  // ========== CONTACTO SECTION ==========
  contacto: {
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.primaryColor,
  },
  contactoInfo: {
    marginBottom: 24,
    gap: 16,
  },
  infoItem: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.accentColorCyan,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  contactoForm: {
    gap: 12,
  },
  formInput: {
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(10, 14, 39, 0.8)',
  },
  formTextarea: {
    minHeight: 120,
  },
  formLabel: {
    fontSize: 13,
    color: COLORS.textLight,
  },
  formSubmit: {
    backgroundColor: COLORS.accentColorBlue,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  formSubmitText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },

  // ========== FOOTER ==========
  footer: {
    backgroundColor: COLORS.darkBg,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderColor,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  footerContent: {
    gap: 20,
    marginBottom: 16,
  },
  footerSection: {
    marginBottom: 8,
  },
  footerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.accentColorBlue,
    marginBottom: 8,
  },
  footerText: {
    fontSize: 12,
    color: 'rgba(148, 163, 184, 0.8)',
    lineHeight: 16,
  },
  footerLink: {
    fontSize: 12,
    color: 'rgba(148, 163, 184, 0.8)',
    marginBottom: 6,
  },
  socialLinks: {
    flexDirection: 'row',
    gap: 12,
  },
  footerBottom: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(148, 163, 184, 0.2)',
    alignItems: 'center',
  },
  footerBottomText: {
    fontSize: 12,
    color: 'rgba(148, 163, 184, 0.6)',
    textAlign: 'center',
  },
});
