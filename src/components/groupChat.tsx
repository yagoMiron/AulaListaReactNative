import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Props = {
  img: ImageSourcePropType | undefined;
  title: string;
  lastMessage: string;
  hour?: string;
  notification?: number;
  isAlert?: boolean;
};

const GroupChat = ({
  img,
  title,
  lastMessage,
  hour,
  notification,
  isAlert,
}: Props) => {
  return (
    <View style={styles.row}>
      <Image
        style={{ ...styles.img, borderRadius: isAlert ? 12 : "50%" }}
        source={img}
      />
      <View style={styles.textContainer}>
        <Text style={styles.groupName}>{title}</Text>
        <Text style={styles.lastMessage}>{lastMessage}</Text>
      </View>
      <View style={styles.aside}>
        <Text
          style={{ ...styles.hour, color: notification ? "#00d000" : "gray" }}
        >
          {hour}
        </Text>
        {notification && (
          <Text style={styles.notification}>{notification}</Text>
        )}
      </View>
    </View>
  );
};
export default GroupChat;

const styles = StyleSheet.create({
  img: {
    height: 52,
    width: 52,
  },
  textContainer: {
    padding: 12,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    paddingStart: 0,
  },
  groupName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  lastMessage: {
    color: "gray",
    fontWeight: "bold",
  },
  hour: {
    color: "#00d000",
  },
  notification: {
    backgroundColor: "#00d000",
    borderRadius: "50%",
    color: "white",
    width: 24,
    height: 24,
    paddingHorizontal: 8,
    paddingVertical: 2,
    textAlign: "center",
  },
  aside: {
    alignItems: "flex-end",
    gap: 8,
  },
});
