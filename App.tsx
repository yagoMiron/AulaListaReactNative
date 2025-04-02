import { FlashList } from "@shopify/flash-list";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  Pressable,
} from "react-native";
import { useState } from "react";
import GroupHeader from "./src/components/groupHead";
import GroupBody from "./src/components/groupBody";

export default function App() {
  return (
    <View style={styles.container}>
      <GroupHeader />

      <GroupBody />

      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>+ Adicionar Grupo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight || 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    gap: 10,
  },
  button: {
    backgroundColor: "#4f4fff",
    padding: 10,
    borderRadius: "50%",
  },
  list: {
    width: "auto",
    gap: 10,
  },
  listContainer: {
    width: "100%",
    paddingVertical: 10,
    gap: 10,
  },
  item: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: `rgb(${Math.random() * 255} ${Math.random() * 255} ${
      Math.random() * 255
    })`,
    color: "white",
    marginVertical: 5,
  },
  btn: {
    padding: 12,
    borderRadius: 28,
    backgroundColor: "#00d000",
    color: "white",
    width: "80%",
    margin: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});
