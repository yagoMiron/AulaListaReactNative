import { FlashList } from "@shopify/flash-list";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState(["Tarefa1"]);
  const [inputValue, setInputValue] = useState("");
  const addTarefa = () => {
    inputValue.length && setTarefas([...tarefas, inputValue]);
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Crie uma tarefa"
          value={inputValue}
          onChangeText={setInputValue}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={addTarefa}>
          <MaterialCommunityIcons name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <FlashList
          style={styles.list}
          data={tarefas}
          renderItem={({ item }) => (
            <View
              style={[
                styles.item,
                {
                  backgroundColor: `rgb(${Math.random() * 255} ${
                    Math.random() * 255
                  } ${Math.random() * 255})`,
                },
              ]}
            >
              <Text style={{ color: "white" }}> {item} </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e7ec",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight || 20,
    padding: 30,
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
});
