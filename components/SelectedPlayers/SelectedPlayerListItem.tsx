import { View, Image, StyleSheet, Text } from "react-native";
import CircularItem from "./CircularItem";
import { useAppSelector } from "../../redux/hooks";
import { Colors } from "../../utils/colors";

interface SelectedPlayerListItemProps {
  countryImgUrl: string;
  height: number;
  age: number;
  position: string;
  number: number;
  teamImgUrl: string;
  playerName: string;
}

const SelectedPlayerListItem: React.FC<SelectedPlayerListItemProps> = ({
  countryImgUrl,
  height,
  age,
  position,
  number,
  teamImgUrl,
  playerName,
}) => {
  const correctAnswer = useAppSelector(
    (state) => state.correctAnswer.correctAnswer
  );
  console.log(correctAnswer);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.nameText}>{playerName}</Text>
      <View style={styles.container}>
        <View>
          <CircularItem
            style={
              correctAnswer?.countryImgUrl === countryImgUrl
                ? { backgroundColor: Colors.green300 }
                : { backgroundColor: Colors.grey300 }
            }
          >
            <Image
              source={{ uri: countryImgUrl }}
              style={{ width: 35, height: 25 }}
            />
          </CircularItem>
          <Text style={styles.nameText}>NAT</Text>
        </View>
        <View>
          <CircularItem
            style={
              correctAnswer?.number === number
                ? { backgroundColor: Colors.green300 }
                : { backgroundColor: Colors.grey300 }
            }
          >
            <Text>#{number}</Text>
          </CircularItem>
          <Text style={styles.nameText}>NUM</Text>
        </View>
        <View>
          <CircularItem
            style={
              correctAnswer?.height === height
                ? { backgroundColor: Colors.green300 }
                : { backgroundColor: Colors.grey300 }
            }
          >
            <Text>{height}</Text>
          </CircularItem>
          <Text style={styles.nameText}>HEI</Text>
        </View>
        <View>
          <CircularItem
            style={
              correctAnswer?.age === age
                ? { backgroundColor: Colors.green300 }
                : { backgroundColor: Colors.grey300 }
            }
          >
            <Text>{age}</Text>
          </CircularItem>
          <Text style={styles.nameText}>AGE</Text>
        </View>
        <View>
          <CircularItem
            style={
              correctAnswer?.positionShortening === position
                ? { backgroundColor: Colors.green300 }
                : { backgroundColor: Colors.grey300 }
            }
          >
            <Text>{position}</Text>
          </CircularItem>
          <Text style={styles.nameText}>POS</Text>
        </View>
        <View>
          <CircularItem
            style={
              correctAnswer?.teamImgUrl === teamImgUrl
                ? { backgroundColor: Colors.green300 }
                : { backgroundColor: Colors.grey300 }
            }
          >
            <Image
              source={{ uri: teamImgUrl }}
              style={{ width: 40, height: 40 }}
            />
          </CircularItem>
          <Text style={styles.nameText}>TEAM</Text>
        </View>
      </View>
    </View>
  );
};

export default SelectedPlayerListItem;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.grey100,
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    shadowColor: Colors.grey300,
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  nameText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
