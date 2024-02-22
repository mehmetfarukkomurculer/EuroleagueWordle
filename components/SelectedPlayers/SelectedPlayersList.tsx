import { FlatList, StyleSheet } from "react-native";
import { useAppSelector } from "../../redux/hooks";
import SelectedPlayerListItem from "./SelectedPlayerListItem";
import { useRef } from "react";



const SelectedPlayersList = () => {
  const userChoices = useAppSelector((state) => state.userChoices.userChoices);
  const ref = useRef<any>();

  const scrollToIndex = () => {
    if (userChoices.length > 0) {
      ref.current.scrollToIndex({ animated: true, index: userChoices.length -1 });
    }
  };
  
  const handleContentSizeChange = () => {
    setTimeout(() => scrollToIndex(), 200);
  };
  return (
    userChoices && (
      <FlatList
        ref={ref}
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
        getItemLayout={(userChoices, index) => ({
          length: 150,
          offset: 150 * index,
          index,
        })}
        onContentSizeChange={handleContentSizeChange}
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
