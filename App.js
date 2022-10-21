import React from "react";

import { View, Text, StyleSheet, StatusBar } from "react-native";
import { colors } from "./source/global/styles.js";

import RootNavigator from './source/navigation/RootNavigators.js'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.StatusBar} />

      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
