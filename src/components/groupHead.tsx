import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const GroupHeader = () => {
  const group_pic = require("../../assets/group_pic.jpg");
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <MaterialCommunityIcons name="close" size={28} color="black" />
        <MaterialCommunityIcons name="dots-vertical" size={28} color="black" />
      </View>
      <View>
        <View style={styles.row}>
          <Image style={styles.img} source={group_pic} />
          <View style={styles.textContainer}>
            <Text style={styles.groupName}>Pais - Escola ABC</Text>
            <Text style={styles.subText}>Comunidade - 10 grupos</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default GroupHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    height: 72,
    width: 72,
    borderRadius: 12,
  },
  textContainer: {
    padding: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingStart: 0,
  },
  groupName: {
    fontSize: 28,
    paddingBottom: 5,
    fontWeight: "bold",
    color: "#333333",
  },
  subText: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 16,
  },
});
