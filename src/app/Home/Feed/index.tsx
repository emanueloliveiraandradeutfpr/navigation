import { ScrollView, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import Post from "../../../components/Post";

export default function Feed() {
  return (
    <ScrollView style={styles.container}>
      <Link
        href={{
          pathname: "./details/[id]",
          params: { id: 1, name: "test", likes: 25 },
        }}
        push={true}
      >
        <Post name={"test"} id={1} likes={25} />
      </Link>
      <Link
        href={{
          pathname: "./details/[id]",
          params: { id: 2, name: "ola", likes: 225 },
        }}
        push={true}
      >
        <Post name={"ola"} id={2} likes={225} />
      </Link>
      <Link
        href={{
          pathname: "./details/[id]",
          params: { id: 5, name: "tapa", likes: 12 },
        }}
        push={true}
      >
        <Post name={"tapa"} id={5} likes={12} />
      </Link>
      <Link
        href={{
          pathname: "./details/[id]",
          params: { id: 4, name: "toalha", likes: 3 },
        }}
        push={true}
      >
        <Post name={"toalha"} id={4} likes={3} />
      </Link>
      <Link
        href={{
          pathname: "./details/[id]",
          params: { id: 3, name: "test", likes: 1000000 },
        }}
        push={true}
      >
        <Post name={"test"} id={3} likes={100000} />
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
});
