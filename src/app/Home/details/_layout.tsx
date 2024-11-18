import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#666",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackVisible: true,
        headerTitle: "Details",
        headerBackButtonMenuEnabled: true,
      }}
    ></Stack>
  );
}
