import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={enteredTitle}
          onChangeText={(enteredText) => setEnteredTitle(enteredText)}
          style={styles.input}
        />
      </View>
      <ImagePicker />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    // flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary700,
    backgroundColor: colors.primary100,
  },
});

export default PlaceForm;
