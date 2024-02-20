import { TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";
import ConditionalRenderList from "../CondiitonalList/ConditionalRenderList";
import { Colors } from "../../utils/colors";

const SearchableDropdown = () => {
  const [value, setValue] = useState<string>("");
  const [toggle, setToggle] = useState(false);

  function inputChangeHandler(selectedValue: string) {
    setValue(selectedValue);
    if(selectedValue.length > 2){
        setToggle(true);
    }else{
        setToggle(false);
    }
  }

  console.log(value, "value");
  console.log(toggle, "toggle");
  function inputPressHandler(){
    setValue("");
    setToggle(true);

  }

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={inputChangeHandler}
        //onPressIn={inputPressHandler}
        style={styles.input}
      />
      <ConditionalRenderList value={value} setValue={setValue} setToggle={setToggle} toggle={toggle}/>
    </View>
  );
};

export default SearchableDropdown;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        margin: 8,
    },
    input: {
        padding: 16,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: Colors.orange500,
    }
})
