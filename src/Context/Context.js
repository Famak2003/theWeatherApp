import { createContext, useState } from "react";
import useSearch from "../hooks/useSearch";

const Context = createContext({});

export function MyContextProvider({ children }) {
  // state management //
  const [querry, setQuerry] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [getQuerry] = useSearch();
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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
