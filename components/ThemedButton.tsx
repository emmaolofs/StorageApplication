import { Pressable, type PressableProps, StyleSheet, Text } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

export type ThemedButtonProps = PressableProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "primary" | "secondary";
  onPress: any;
  title: string;
};

export function ThemedButton({
  style,
  lightColor,
  darkColor,
  type = "primary",
  onPress,
  title,
  ...rest
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "buttonBackground"
  );
  const textColor = useThemeColor(
    {
      light:
        lightColor ||
        (type === "primary"
          ? Colors.light.buttonText
          : Colors.light.buttonBackground),
      dark:
        darkColor ||
        (type === "primary"
          ? Colors.dark.buttonText
          : Colors.dark.buttonBackground),
    },
    "buttonText"
  );

  const pressedColor = useThemeColor(
    {
      light: lightColor,
      dark: darkColor,
    },
    "buttonBackgroundDisabled"
  );

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? type === "primary"
              ? pressedColor
              : "transperent"
            : backgroundColor,
        },
        type === "primary" ? styles.primary : undefined,
        type === "secondary" ? styles.secondary : undefined,
      ]}
      onPress={onPress}
      {...rest}
    >
      {({ pressed }) => (
        <Text
          style={[
            {
              color: pressed
                ? type === "secondary"
                  ? pressedColor
                  : textColor
                : textColor,
            },
            styles.text,
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primary: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  secondary: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
});
