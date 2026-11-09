import React, { useState } from "react";
import {
  SafeAreaView, View, Text, TouchableOpacity, ScrollView,
  StyleSheet, StatusBar
} from "react-native";

type Registro = { id: number; accion: string; likes: number; hora: string };

export default function App() {
  const [likes, setLikes] = useState(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  function registrar(accion: string, nuevoValor: number) {
    const nuevoRegistro: Registro = {
      id: Date.now() + Math.random(),
      accion,
      likes: nuevoValor,
      hora: new Date().toLocaleTimeString("es-CO", {
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
      })
    };
    setRegistros((anteriores) => [nuevoRegistro, ...anteriores]);
  }

  function sumar() {
    const nuevoValor = likes + 1;
    setLikes(nuevoValor);
    registrar("Like +1", nuevoValor);
  }

  function restar() {
    const nuevoValor = Math.max(0, likes - 1);
    setLikes(nuevoValor);
    registrar("Restar -1", nuevoValor);
  }

  function reiniciar() {
    setLikes(0);
    registrar("Reiniciar", 0);
  }

  const superoLimite = likes > 10;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.eyebrow}>PROYECTO DE APRENDIZAJE</Text>
          <Text style={styles.title}>Contador de Likes</Text>
          <Text style={styles.subtitle}>Una interacción sencilla, registrada al instante.</Text>

          <Text style={[styles.counter, superoLimite && styles.counterHot]}>{likes}</Text>
          <Text style={styles.status}>
            {superoLimite ? "¡Ya superaste los 10 likes!" : "¡Gracias por participar!"}
          </Text>

          <TouchableOpacity accessibilityRole="button" style={styles.primary} onPress={sumar}>
            <Text style={styles.primaryText}>♥  Me gusta</Text>
          </TouchableOpacity>
          <View style={styles.row}>
            <TouchableOpacity accessibilityRole="button" style={styles.secondary} onPress={restar}>
              <Text style={styles.secondaryText}>− Restar</Text>
            </TouchableOpacity>
            <TouchableOpacity accessibilityRole="button" style={styles.light} onPress={reiniciar}>
              <Text style={styles.lightText}>Reiniciar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.historyHeader}>
            <Text style={styles.historyTitle}>Historial</Text>
            <Text style={styles.muted}>{registros.length} registros</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={[styles.th, styles.colAction]}>Acción</Text>
            <Text style={styles.th}>Likes</Text>
            <Text style={styles.th}>Hora</Text>
          </View>
          {registros.length === 0 ? (
            <Text style={styles.empty}>Todavía no hay interacciones.</Text>
          ) : registros.map((item) => (
            <View key={item.id} style={styles.tableRow}>
              <Text style={[styles.td, styles.colAction]}>{item.accion}</Text>
              <Text style={styles.td}>{item.likes}</Text>
              <Text style={styles.td}>{item.hora}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.footer}>Desarrollado con React Native y Expo</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f1f5f9" },
  container: { flexGrow: 1, justifyContent: "center", padding: 18 },
  card: { backgroundColor: "#fff", borderRadius: 22, padding: 22, elevation: 4 },
  eyebrow: { color: "#0f9f6e", fontSize: 11, fontWeight: "800", letterSpacing: 1.2, textAlign: "center" },
  title: { color: "#1f2937", fontSize: 27, fontWeight: "800", textAlign: "center", marginTop: 8 },
  subtitle: { color: "#64748b", textAlign: "center", lineHeight: 21, marginTop: 8 },
  counter: { color: "#2788ce", fontSize: 76, fontWeight: "800", textAlign: "center", marginTop: 18 },
  counterHot: { color: "#e87925" },
  status: { color: "#64748b", textAlign: "center", marginBottom: 18 },
  primary: { backgroundColor: "#20b875", borderRadius: 12, padding: 15, alignItems: "center" },
  primaryText: { color: "#fff", fontSize: 17, fontWeight: "800" },
  row: { flexDirection: "row", gap: 10, marginTop: 10 },
  secondary: { flex: 1, backgroundColor: "#397fca", padding: 14, borderRadius: 12, alignItems: "center" },
  secondaryText: { color: "#fff", fontWeight: "700" },
  light: { flex: 1, backgroundColor: "#e9eef4", padding: 14, borderRadius: 12, alignItems: "center" },
  lightText: { color: "#334155", fontWeight: "700" },
  historyHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 28, marginBottom: 10 },
  historyTitle: { color: "#1f2937", fontSize: 18, fontWeight: "800" },
  muted: { color: "#64748b", fontSize: 12 },
  tableHeader: { flexDirection: "row", backgroundColor: "#f8fafc", paddingVertical: 11, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  tableRow: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#e2e8f0", paddingVertical: 12 },
  th: { flex: 1, textAlign: "center", color: "#475569", fontWeight: "800", fontSize: 12 },
  td: { flex: 1, textAlign: "center", color: "#334155", fontSize: 12 },
  colAction: { flex: 1.5 },
  empty: { textAlign: "center", color: "#94a3b8", padding: 18, borderWidth: 1, borderColor: "#e2e8f0" },
  footer: { color: "#94a3b8", textAlign: "center", fontSize: 11, marginTop: 18 }
});
