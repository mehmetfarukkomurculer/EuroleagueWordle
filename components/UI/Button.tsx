import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

interface ButtonProps {
  onPress: () => void;
  buttonTitle: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, buttonTitle }) => {
  return (
    <Pressable onPress={onPress} style= {styles.buttonContainer}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.orange500,
        padding: 16,
        borderRadius: 16,
        width: '80%',
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
    }
});
