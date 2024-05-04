import { useState } from "react";
import { View, StyleSheet } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput setCourseGoals={setCourseGoals}></GoalInput>
      <GoalsList courseGoals={courseGoals}></GoalsList>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
});
