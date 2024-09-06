import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function LogIn() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.buttonContainer}>
        <ThemedText>Logga in</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    height: "35%",
    width: "100%",
    paddingTop: 20,
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
