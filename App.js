import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import HomeScreen from "./screens/HomeScreen";
import SupportScreen from "./screens/Support";
import JournalScreen from "./screens/Journal";
import InsightsScreen from "./screens/Insights";
import DailyEntry from "./components/ui/Journal/DailyEntry";
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;
          let label;

          switch (route.name) {
            case "Home":
              iconSource = require("./assets/icons/tab-icons/home.png");

              break;
            case "Journal":
              iconSource = require("./assets/icons/tab-icons/journal.png");

              break;
            case "Support":
              iconSource = require("./assets/icons/tab-icons/support.png");

              break;
            case "Insights":
              iconSource = require("./assets/icons/tab-icons/insights.png");

              break;
          }

          return (
            <View style={{ alignItems: "center", gap: 2 }}>
              <Image
                source={iconSource}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "#B4E04C" : "black",
                }}
              />
              <Text
                style={{ fontSize: 12, color: focused ? "#B4E04C" : "black" }}
              >
                {label}
              </Text>
            </View>
          );
        },
        tabBarActiveTintColor: "#B4E04C",
        tabBarInactiveTintColor: "black",
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 5,
          paddingTop: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Journal" component={JournalScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
      <Tab.Screen name="Insights" component={InsightsScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DailyEntry"
          component={DailyEntry}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
