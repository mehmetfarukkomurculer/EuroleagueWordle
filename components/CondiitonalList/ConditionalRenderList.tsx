import { FlatList, Text, View, StyleSheet } from "react-native";
import { Dispatch, SetStateAction } from "react";
import { players } from "../../data/players";
import ConditionalRenderListItem from "./ConditionalRenderListItem";

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
  const filteredPlayers = players.filter((player) => {
    return player.name.toString().toLowerCase().includes(value.toLowerCase());
  });
  
  if (filteredPlayers.length > 0) {
    return (
      toggle && (
        <View >
            <FlatList
                data={filteredPlayers}
                renderItem={(item) => <ConditionalRenderListItem teamUrl={item.item.teamImgUrl} playerName={item.item.name.toString()} onPress={() => {
                  setToggle(false);
                  setValue("");
                }} /> }
                keyExtractor={item => item.id.toString()}
            />
        </View>
      )
    );
  }

  return <View><Text>No players found!</Text></View>;
};

export default ConditionalRenderList;

const styles = StyleSheet.create({

});
