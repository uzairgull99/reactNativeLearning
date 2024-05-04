import { StyleSheet, TextInput, View, Button } from "react-native";
import React from "react";
import { useState } from "react";

const GoalInput = ({ setCourseGoals }) => {
  const [myGoal, setGoal] = useState("");

  function goalInputHandler(enteredText) {
    setGoal(enteredText);
    console.log("Entered Text", enteredText);
  }

  function addGoalHandler() {
    console.log("Btn Goal Pressed");
    if (myGoal != "") {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { title: myGoal, id: Math.random().toString() },
      ]);
    }
    setGoal("");
  }

  return (
    <View style={styles.topView}>
      <TextInput
        style={styles.inputField}
        placeholder="Please write your course goal"
        onChangeText={goalInputHandler}
        defaultValue={myGoal}
      />
      <Button title="Add Goal" onPress={addGoalHandler}></Button>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  inputField: {
    borderWidth: 1,
    padding: 5,
    width: "70%",
    marginRight: 5,
    borderColor: "grey",
  },
});
