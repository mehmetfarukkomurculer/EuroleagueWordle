import React, { useRef } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useAppSelector } from "../../redux/hooks";
import SelectedPlayerListItem from "./SelectedPlayerListItem";

const SelectedPlayersList = () => {
  const userChoices = useAppSelector(
    (state) => state.userChoices.userChoices
  );
  const flatListRef = useRef<FlatList | null>(null);

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  return (
    userChoices && (
      <FlatList
        ref={(ref) => (flatListRef.current = ref)}
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
