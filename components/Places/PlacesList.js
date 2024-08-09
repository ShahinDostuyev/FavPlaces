import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";
import { useNavigation } from "@react-navigation/native";

function PlacesList({ places }) {
  const navigation = useNavigation();

  function selectPlaceHandler(id) {
    navigation.navigate("PlaceDetails", {
      placeId: id,
    });
  }
  return (
    <>
      {places && places.length !== 0 ? (
        <FlatList
          style={styles.list}
          data={places}
          renderItem={({ index, item }) => (
            <PlaceItem
              place={item}
              index={index}
              onSelect={selectPlaceHandler}
            />
          )}
          keyExtractor={(place) => place.id}
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
  list: { margin: 20 },
  fallBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallBackText: {
    fontSize: 16,
  },
});
