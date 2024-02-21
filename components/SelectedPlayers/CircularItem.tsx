import { View, StyleSheet, Text, StyleProp, ViewStyle } from "react-native";
import { Colors } from "../../utils/colors";

interface CircularItemProps {
    children: React.ReactNode;
    style: StyleProp<ViewStyle>;
}

const CircularItem: React.FC<CircularItemProps> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
}

export default CircularItem;

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.orange500,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
    }
});
