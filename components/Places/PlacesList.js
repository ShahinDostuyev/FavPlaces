import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";

function PlacesList({ places }) {
  return (
    <>
      {places && places.length !== 0 ? (
        <FlatList
          data={places}
          renderItem={(place) => <PlaceItem place={place} />}
          keyExtractor={({ place }) => place.id}
        />
      ) : (
        <View style={styles.fallBackContainer}>
          <Text style={styles.fallBackText}>No places added yet</Text>
        </View>
      )}
    </>
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  fallBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallBackText: {
    fontSize: 16,
  },
});
