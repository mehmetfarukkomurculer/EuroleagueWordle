import { FlatList, Text, View, StyleSheet } from "react-native";
import { Dispatch, SetStateAction } from "react";
import { players } from "../../data/players";
import ConditionalRenderListItem from "./ConditionalRenderListItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { playerInterface } from "../../interfaces/playerInterface";
import { addNewChoice } from "../../redux/slices/user-choices";
import { Colors } from "../../utils/colors";
interface ConditionalRenderListProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const ConditionalRenderList: React.FC<ConditionalRenderListProps> = ({
  value,
  setValue,
  toggle,
  setToggle,
}) => {
  const correctAnswer = useAppSelector(
    (state) => state.correctAnswer.correctAnswer
  );
  const dispatch = useAppDispatch();
  const filteredPlayers = players.filter((player) => {
    return player.name.toString().toLowerCase().includes(value.toLowerCase());
  });

  function selectPlayerHandler(item: playerInterface) {
    dispatch(addNewChoice(item));
    setToggle(false);
    setValue("");
  }

  if (filteredPlayers.length > 0) {
    return (
      toggle && (
        <View style={styles.playerSearchContainer}>
          <FlatList
            data={filteredPlayers}
            renderItem={(item) => (
              <ConditionalRenderListItem
                teamUrl={item.item.teamImgUrl}
                playerName={item.item.name.toString()}
                onPress={() => selectPlayerHandler(item.item)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )
    );
  }

  return (
    <View>
      <Text>No players found!</Text>
    </View>
  );
};

export default ConditionalRenderList;

const styles = StyleSheet.create({
  playerSearchContainer: {
    position: 'absolute',
    top: 58,
    backgroundColor: Colors.grey200,
    width: '100%',
    shadowColor: Colors.grey600,
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: 8,
  }
});
