import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { colors } from "../constants/colors";
import { useEffect, useState } from "react";
import { fetchPlaceDetails } from "../util/database";

function PlaceDetails({ route, navigation }) {
  const selectedPlaceId = route.params.placeId;
  const [fetchedPlace, setFetchedPlace] = useState();

  useEffect(() => {
    async function fetchDetail(id) {
      const fetchedPlace = await fetchPlaceDetails(id);
      setFetchedPlace(fetchedPlace);
      navigation.setOptions({
        title: fetchedPlace.title,
      });
    }
    fetchDetail(selectedPlaceId);
  }, [selectedPlaceId]);

  function showOnMapHandler() {
    navigation.navigate("Map", {
      initialLat: fetchedPlace.lat,
      initialLng: fetchedPlace.lng,
    });
  }
  return (
    <>
      {fetchedPlace ? (
        <ScrollView>
          <Image
            style={styles.image}
            source={{ uri: fetchedPlace?.imageUri }}
          />
          <View style={styles.locationContainer}>
            <View style={styles.addressContainer}>
              <Text style={styles.address}>{fetchedPlace?.address}</Text>
            </View>
            <OutlinedButton icon="map" onPress={showOnMapHandler}>
              View on Map
            </OutlinedButton>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.fallback}>
          <Text>Loading place...</Text>
        </View>
      )}
    </>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: colors.primary100,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
