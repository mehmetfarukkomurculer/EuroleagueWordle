import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { players } from './data/players';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{players[48].name}</Text>
      <View style={{padding: 15,}}>
        <Image source={{uri: players[48].imgUrl}} style={{width: 200, height:200 }} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
