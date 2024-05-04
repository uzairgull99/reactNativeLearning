import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";

export default function GoalsList({ courseGoals = courseGoals }) {
  return (
    <View style={styles.listView}>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <View style={styles.goalsList}>
              <Text style={styles.goalsText}>{itemData.item.title}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listView: {
    flex: 6,
    marginBottom: 30,
  },
  goalsList: {
    backgroundColor: "#7ABA78",
    marginBottom: 8,
    padding: 10,
    borderRadius: 5,
  },
  goalsText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
