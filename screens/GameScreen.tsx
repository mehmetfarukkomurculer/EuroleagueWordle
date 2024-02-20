import { View, Image, StyleSheet } from "react-native";
import SearchableDropdown from "../components/SearchableDropdown/SearchableDropdown";
import SelectedPlayersList from "../components/SelectedPlayers/SelectedPlayersList";
import { StackParamList } from "../interfaces/StackParamList";
import { RouteProp } from "@react-navigation/native";
import { useAppSelector } from "../redux/hooks";

interface GameScreenProps {
    route: RouteProp<StackParamList, 'Game'>;
}

const GameScreen: React.FC<GameScreenProps> = ({ route }: any) => {
    const { selectedPlayer } = route.params;

    const userChoices = useAppSelector((state) => state.userChoices.userChoices);
    let blurStyle = 36;

    if(userChoices.length === 7){
        blurStyle = 8
    }else if(userChoices.length === 6){
        blurStyle = 12
    }else if(userChoices.length === 5){
        blurStyle = 16
    }else if(userChoices.length === 4){
        blurStyle = 20
    }else if(userChoices.length === 3){
        blurStyle = 24
    }else if(userChoices.length === 2){
        blurStyle = 28
    }else if(userChoices.length === 1){
        blurStyle = 32
    }


    return (
    <View style={styles.container}>
      <Image blurRadius={blurStyle} source={{ uri: selectedPlayer.imgUrl }} style={styles.img}/>
      <SearchableDropdown />
      <SelectedPlayersList />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 8,
    }
})
