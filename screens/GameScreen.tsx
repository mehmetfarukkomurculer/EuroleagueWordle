import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  Animated,
} from "react-native";
import SearchableDropdown from "../components/SearchableDropdown/SearchableDropdown";
import SelectedPlayersList from "../components/SelectedPlayers/SelectedPlayersList";
import { StackParamList } from "../interfaces/StackParamList";
import { RouteProp } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Button from "../components/UI/Button";
import { useNavigation } from "@react-navigation/native";
import { clearChoices } from "../redux/slices/user-choices";
import { clearCorrectAnswer } from "../redux/slices/correct-answer";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useRef } from "react";

interface GameScreenProps {
  route: RouteProp<StackParamList, "Game">;
}

const GameScreen: React.FC<GameScreenProps> = ({ route }: any) => {
  const { selectedPlayer } = route.params;
  const navigation = useNavigation<any>();
  const userChoices = useAppSelector((state) => state.userChoices.userChoices);

  const dispatch = useAppDispatch();
  let blurStyle = 36;

  if (userChoices.length === 7) {
    blurStyle = 8;
  } else if (userChoices.length === 6) {
    blurStyle = 12;
  } else if (userChoices.length === 5) {
    blurStyle = 16;
  } else if (userChoices.length === 4) {
    blurStyle = 20;
  } else if (userChoices.length === 3) {
    blurStyle = 24;
  } else if (userChoices.length === 2) {
    blurStyle = 28;
  } else if (userChoices.length === 1) {
    blurStyle = 32;
  }

  function finishGameHandler() {
    dispatch(clearChoices());
    dispatch(clearCorrectAnswer());
    navigation.navigate("Start");
  }

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.headerText}>GUESS THE PLAYER</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("History");
          }}
        >
          <FontAwesome name="history" size={24} color="black" />
        </Pressable>
      </View>
      {userChoices.length === 8 ||
      userChoices.find((userChoice) => userChoice.id === selectedPlayer.id) ? (
        <>
          <Image source={{ uri: selectedPlayer.imgUrl.replace('https---www.proballers.com/', '')}} style={styles.img} />
          <Text style={styles.playerNameText}>{selectedPlayer.name}</Text>
          <Button onPress={finishGameHandler} buttonTitle="PLAY AGAIN" />
        </>
      ) : (
        <>
          <Image
            blurRadius={blurStyle}
            source={{ uri: selectedPlayer.imgUrl }}
            style={styles.img}
          />
          <SearchableDropdown />
        </>
      )}
      <SelectedPlayersList />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 8,
  },
  playerNameText: {
    fontFamily: "Merriweather",
    fontSize: 24,
    margin: 8,
  },
  appBar: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerText: {
    fontFamily: "Merriweather",
    fontSize: 24,
  },
});
