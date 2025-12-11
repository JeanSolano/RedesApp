// app/tabs/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // Colores
        tabBarActiveTintColor: "#4da6ff",
        tabBarInactiveTintColor: "#8b93af",

        // Label
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "700",
          marginBottom: 6,
        },

        // Estilo para subir el TabBar en Android
        tabBarStyle: {
          backgroundColor: "#0a0e27",
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: "#000",
          shadowOpacity: 0.25,
          shadowRadius: 6,

          // 👇 Ajustes especiales para Android
          height: Platform.OS === "android" ? 95 : 90,
          paddingBottom: Platform.OS === "android" ? 24 : 10,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          title: "Servicios",
          tabBarIcon: ({ color }) => (
            <Ionicons name="construct-outline" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="pricing"
        options={{
          title: "Precios",
          tabBarIcon: ({ color }) => (
            <Ionicons name="pricetag-outline" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacto",
          tabBarIcon: ({ color }) => (
            <Ionicons name="call-outline" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
