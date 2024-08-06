import PlaceForm from "../components/Places/PlaceForm";
import { fetchPlaces, insertPlace } from "../util/database";

function AddPlace({ navigation }) {
  
  async function CreatePlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
  }
  return <PlaceForm onCreatePlace={CreatePlaceHandler} />;
}

export default AddPlace;
