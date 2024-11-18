import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Post from "../../../components/Post";

export default function DetailsScreen() {
  const { id, name, likes } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Post name={name.toString()} id={Number(id)} likes={Number(likes)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
});
