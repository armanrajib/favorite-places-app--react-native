import { FlatList, StyleSheet, Text, View } from "react-native";

import PlaceItem from "./PlaceItem";
import { colors } from "../../constants/colors";

function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places found. Maybe start adding some!
        </Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ itemData }) => <PlaceItem place={itemData.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    // flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: colors.primary200,
  },
});

export default PlacesList;
