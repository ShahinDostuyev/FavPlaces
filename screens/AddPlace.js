import PlaceForm from "../components/Places/PlaceForm";

function AddPlace({ navigation }) {
  function CreatePlaceHandler(place) {
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }
  return <PlaceForm onCreatePlace={CreatePlaceHandler} />;
}

export default AddPlace;
