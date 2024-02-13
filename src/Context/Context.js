import { createContext, useState } from "react";

import * as Hooks from "./../hooks/index";

const Context = createContext({});

export function MyContextProvider({ children }) {
  // state management //
  const [locationName, setLocationName] = useState("");
  const [querry, setQuerry] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [getQuerry] = Hooks.useSearch();
  const [fetchedDetails, setFetchedDetails] = useState({
    cloudy: 0,
    humidity: 0,
    wind: 0,
    temp: 0,
    city: 0,
    weather: "",
  });

  // handle search //
  function handleSubmit(e) {
    e.preventDefault();
    getQuerry(querry, setData, setError, setLoading);
  }

  const location = Hooks.useGeoLocation();

  return (
    <Context.Provider
      value={{
        getQuerry,
        querry,
        setQuerry,
        data,
        setData,
        error,
        setError,
        loading,
        setLoading,
        fetchedDetails,
        setFetchedDetails,
        handleSubmit,
        locationName,
        setLocationName,
        location,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
