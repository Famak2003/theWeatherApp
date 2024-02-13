import { useContext } from "react";
import Context from "../Context/Context";
import axios from "axios";

function useLocator() {
  const { location, locationName, setLocationName } = useContext(Context);

  async function getCord() {
    // checks if location is available //
    if (!location.loaded) {
      return;
    }
    // if location.loaded is true //
    const lon = location?.coordinates.lon;
    const lat = location?.coordinates.lat;

    const api = process.env.REACT_APP_ENDPOINT;
    const apiKey = process.env.REACT_APP_APIKEY;

    try {
      const response = await axios.get(
        `${api}geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`,
      );
      if (response?.status !== 200) {
        throw new Error("There was an error getting user location");
      }
      setLocationName(response.data[0].name.trim().toLowerCase());
      console.log(locationName);
    } catch (error) {
      console.error(error?.response?.data?.message);
    }
  }
  return [getCord];
}
export default useLocator;
