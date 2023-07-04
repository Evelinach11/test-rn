import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

interface Item {
  id: string;
  text: string;
  number: number;
}

const Scroll: React.FC = () => {
  const data: Item[] = [
    { id: "1", text: "Test", number: 10 },
    { id: "2", text: "Test", number: 9 },
    { id: "3", text: "Test", number: 8 },
    { id: "4", text: "Test", number: 7 },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Title</Text>
        {data.map((item: Item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
            <Text style={styles.number}>{item.number}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    color: "#fff",
    padding: 45,
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    backgroundColor: "#3e6ac1",
  },
  item: {
    color: "#fff",
    padding: 20,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#002366",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  number: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Scroll;
