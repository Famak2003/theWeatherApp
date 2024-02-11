import { useEffect } from "react";

import * as Utilites from "./../Utilities/index";

function useHandleDetails(setFetchedDetails, data, error) {
  // listens for changes in the states. error specifically, then updates the setFetchedDetails accordingly //
  useEffect(() => {
    if (error) {
      setFetchedDetails({
        cloudy: `${error}`,
        humidity: `${error}`,
        wind: `${error}`,
        temp: `${error}`,
        city: `${error}`,
        weather: `${error}`,
      });
    } else {
      // setting usefull data from the response if error stays null
      setFetchedDetails((prev) => ({
        ...prev,
        cloudy: `${data?.clouds?.all || 0}%`,
        humidity: `${data?.main?.humidity || 0}%`,
        wind: `${data?.wind?.speed || 0}m/hr`,
        temp: `${Math.round(Utilites.tempConverter(data?.main?.temp)) || 0}°`, // fetching temp and converting from kelvin to celcius
        weather: `${data?.weather[0]?.main || "unavailable"}`,
        city: `${data?.name || "unavailable"}`,
      }));
    }
  }, [data, error, setFetchedDetails]);
}

export default useHandleDetails;
