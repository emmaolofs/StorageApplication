import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { ThemedButton } from "@/components/ThemedButton";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.buttonContainer}>
        <ThemedButton
          type="primary"
          title="Logga in"
          onPress={() => alert("Primary Button Pressed")}
        />
        <ThemedButton
          type="secondary"
          title="Skapa konto"
          onPress={() => alert("Secondary Button Pressed")}
        />
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
