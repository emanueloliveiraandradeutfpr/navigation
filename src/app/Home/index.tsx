import { StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import Feed from "./Feed";
export default function Page() {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          title: "Feed",
          tabBarIcon: ({ focused }: any) => (
            <MaterialIcons
              name="feed"
              size={24}
              color={focused ? "#1C80FF" : "#000"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Meu Perfil",
          tabBarIcon: ({ focused }: any) => (
            <MaterialIcons
              name="person-pin"
              size={24}
              color={focused ? "#1C80FF" : "#000"}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
