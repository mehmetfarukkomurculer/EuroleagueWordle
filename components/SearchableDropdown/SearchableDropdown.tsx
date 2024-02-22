import { TextInput, View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import ConditionalRenderList from "../CondiitonalList/ConditionalRenderList";
import { Colors } from "../../utils/colors";
import { useAppSelector } from "../../redux/hooks";
const SearchableDropdown = () => {
  const [value, setValue] = useState<string>("");
  const [toggle, setToggle] = useState(false);
  const userChoices = useAppSelector((state) => state.userChoices.userChoices);
  function inputChangeHandler(selectedValue: string) {
    setValue(selectedValue);
    if (selectedValue.length > 2) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={inputChangeHandler}
          style={styles.input}
        />
        <Text>{userChoices.length}/8</Text>
      </View>
      <ConditionalRenderList
        value={value}
        setValue={setValue}
        setToggle={setToggle}
        toggle={toggle}
      />
    </View>
  );
};

export default SearchableDropdown;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: 8,
  },
  input: {
    position: "relative",
    flex: 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.orange500,
    padding: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.orange500,
    borderRadius: 4,
    padding: 16,
  },
});
