import { Pressable, Image, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

interface ConditionalRenderListItemProps {
  teamUrl: string;
  playerName: string;
  onPress: () => void;
}

const ConditionalRenderListItem: React.FC<ConditionalRenderListItemProps> = ({
  teamUrl,
  playerName,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Image source={{ uri: teamUrl }} style={styles.teamImg} />
        <Text style={styles.playerNameText}>{playerName}</Text>
      </View>
    </Pressable>
  );
};

export default ConditionalRenderListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
  },
  teamImg: {
    width: 50,
    height: 50,
  },
  playerNameText: {
    fontSize: 16,
    fontFamily: 'Merriweather',
  },
  pressed: {
    backgroundColor: Colors.grey300,
    borderRadius: 4,
  },
});
