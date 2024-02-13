import { useState, useEffect } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lon: "" },
  });

  // runs when location fetch is successful //
  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      },
    });
  };

  // runs when location fetch is failed //
  const onError = (error) => {
    setLocation({
      loaded: false,
      error: {
        message: error.message,
      },
    });
  };

  // makes sure to only fetch userlocation on mount
  useEffect(() => {
    // set an error if browser doesn't support navigator
    if (!navigator.geolocation) {
      onError({
        message: "Geolocation not supported",
      });

      return;
    }
    // grab user's coordinate if supported by browser
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
