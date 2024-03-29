import { View, Image, StyleSheet, Text, Animated } from "react-native";
import CircularItem from "./CircularItem";
import { useAppSelector } from "../../redux/hooks";
import { Colors } from "../../utils/colors";
import { FontAwesome } from '@expo/vector-icons';
import { useRef, useEffect } from "react";

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
    <Animated.View style={styles.mainContainer}>
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
            <View style={styles.row}>
                <Text style={{marginRight: 4}}>#{number}</Text>
                {(correctAnswer && correctAnswer.number === number) ? null : (correctAnswer && correctAnswer.number < number) ? <FontAwesome name="long-arrow-down" size={16} color="black" /> : <FontAwesome name="long-arrow-up" size={16} color="black" />}
            </View>
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
            <View style={styles.row}>
                <Text style={{marginRight: 4}}>{height}</Text>
                {(correctAnswer && correctAnswer.height === height) ? null : (correctAnswer && correctAnswer.height < height) ? <FontAwesome name="long-arrow-down" size={16} color="black" /> : <FontAwesome name="long-arrow-up" size={16} color="black" />}
            </View>
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
            <View style={styles.row}>
                <Text style={{marginRight: 4}}>{age}</Text>
                {(correctAnswer && correctAnswer.age === age) ? <Text></Text> : (correctAnswer && correctAnswer.age < age) ? <FontAwesome name="long-arrow-down" size={16} color="black" /> : <FontAwesome name="long-arrow-up" size={16} color="black" />}
            </View>
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
    </Animated.View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
