import { View, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import { players } from "../data/players";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../redux/hooks";
import { setCorrectAnswer } from "../redux/slices/correct-answer";


const StartGameScreen = () => {
  
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
 

  function startGameHandler() {
    const randomPlayerIndex = Math.floor(Math.random() * 291);
    console.log("randomPlayerIndex", randomPlayerIndex);
    const selectedPlayer = players[randomPlayerIndex];
    dispatch(setCorrectAnswer(players[randomPlayerIndex]));
    navigation.navigate("Game", { selectedPlayer: selectedPlayer });
  }

  return (
    <View style={styles.container}>
      <Button onPress={startGameHandler} buttonTitle="PLAY" />
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
