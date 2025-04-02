import { StyleSheet, Text, View } from "react-native";
import GroupChat from "./groupChat";

const GroupBody = () => {
  return (
    <View style={styles.container}>
      <GroupChat
        img={require("../../assets/avisos.jpg")}
        title="Avisos"
        lastMessage="Sejam bem vindos pais e respons..."
        hour="11:42"
        notification={1}
        isAlert
      />
      <Text style={styles.h3}>Grupos dos quais você participa</Text>
      <GroupChat
        img={require("../../assets/cacto.png")}
        title="Pais - Escola ABC"
        lastMessage="Alessandra: Obrigada, gente"
        hour="13:37"
        notification={1}
      />
      <GroupChat
        img={require("../../assets/fruitbag.png")}
        title="Pais do primeiro ano"
        lastMessage="Fabio: Bem-vindos, pessoal"
        hour="13:37"
        notification={1}
      />
      <GroupChat
        img={require("../../assets/onibus.jpg")}
        title="Carona para a escola"
        lastMessage="Diego: Quem quer dirigir?"
        hour="13:37"
      />
      <Text style={styles.h3}>Grupos que você pode entrar</Text>
      <GroupChat
        img={require("../../assets/lontra.jpg")}
        title="Turma do terceiro ano"
        lastMessage="96 inscritos"
      />
    </View>
  );
};

export default GroupBody;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingHorizontal: 20,
  },
  separer: {
    width: "100%",
    borderColor: "#0000000",
    borderTopColor: "gray",
    borderWidth: 5,
    height: 0,
  },
  h3: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 16,
    borderTopWidth: 3,
    borderColor: "#80808035",
  },
});
