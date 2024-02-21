import { FlatList, StyleSheet } from "react-native";
import { useAppSelector } from "../../redux/hooks";
import SelectedPlayerListItem from "./SelectedPlayerListItem";

const SelectedPlayersList = () => {
  const userChoices = useAppSelector((state) => state.userChoices.userChoices);

  return (
    userChoices && (
      <FlatList
        style={styles.results}
        data={userChoices}
        keyExtractor={(item) => item.id.toString() + Math.random() * 100}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => (
          <SelectedPlayerListItem
            countryImgUrl={item.item.countryImgUrl}
            height={item.item.height}
            age={item.item.age}
            position={item.item.positionShortening}
            number={item.item.number}
            teamImgUrl={item.item.teamImgUrl}
            playerName={item.item.name}
          />
        )}
      />
    )
  );
};

export default SelectedPlayersList;

const styles = StyleSheet.create({
  results: {
    position: "relative",
    zIndex: -1,
  },
});
