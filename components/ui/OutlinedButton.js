import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../constants/colors";

function OutlinedButton({ icon, onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons
        name={icon}
        size={18}
        color={colors.primary500}
        style={styles.icon}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary500,
  },
  pressed: { opacity: 0.7 },
  icon: {
    marginRight: 6,
  },
  text: {
    color: colors.primary500,
  },
});

export default OutlinedButton;
