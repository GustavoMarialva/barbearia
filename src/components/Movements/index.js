import React from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Movements({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        <Text style={data.type === 1 ? styles.value : styles.expenses}>
          R$ {data.value}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#57606f",
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },

  date: {
    color: "#57606f",
    fontWeight: "bold",
  },

  label: {
    fontWeight: "bold",
    fontSize: 16,
  },

  value: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "500",
  },

  expenses: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "500",
  },
});
