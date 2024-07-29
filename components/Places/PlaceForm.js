import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../constants/colors";
import { useState } from "react";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  function titleChangeHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={enteredTitle}
          onChangeText={titleChangeHandler}
        />
      </View>
      <ImagePicker />
      <LocationPicker/>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: colors.primary400,
  },
  input: {
    marginVertical: 8,
    marginHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: colors.primary400,
    borderBottomWidth: 2,
    backgroundColor: colors.accent500,
  },
});
