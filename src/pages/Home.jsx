import { useState } from "react";
import useSearch from "../hooks/useSearch";

import * as Utilites from "./../Utilities/index";
import * as Components from "./../components/index";
import useHandleDetails from "../hooks/useHandleDetails";

function Home() {
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

  // parse and set fetched details
  const handleDetails = useHandleDetails(setFetchedDetails, data, error);

  // handle search
  function handleSubmit(e) {
    e.preventDefault();
    getQuerry(querry, setData, setError, setLoading);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${
          Utilites.handleWeatherIcon(fetchedDetails.weather).bg
        })`,
      }}
      className=" App flex justify-between text-[var(--gray)] h-screen w-screen bg-cover bg-center ring-3"
    >
      {/* // Left side of the ui on desktop // */}
      <Components.Left fetchedDetails={fetchedDetails} />

      {/* // Right side of the ui on desktop // */}
      <Components.Right
        handleSubmit={handleSubmit}
        loading={loading}
        querry={querry}
        setQuerry={setQuerry}
        fetchedDetails={fetchedDetails}
        getQuerry={getQuerry}
        setData={setData}
        setError={setError}
        setLoading={setLoading}
      />
    </div>
  );
}

export default Home;
