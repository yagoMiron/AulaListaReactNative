import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const GroupHeader = () => {
  const group_pic = require("../../../assets/group_pic.jpg");
  return (
    <View>
      <View style={styles.tab}>
        <MaterialCommunityIcons name="close" size={20} color="gray" />
        <MaterialCommunityIcons name="dots-vertical" size={20} color="gray" />
      </View>
      <View>
        <View>
          <Image style={styles.img} source={group_pic} />
          <Text>Pais - Escola ABC</Text>
          <Text>Comunidade - 10 grupos</Text>
        </View>
      </View>
    </View>
  );
};
export default GroupHeader;

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
});
