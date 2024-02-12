import { useContext } from "react";

import * as Utilites from "./../Utilities/index";
import * as Components from "./../components/index";
import useHandleDetails from "../hooks/useHandleDetails";
import Context from "../Context/Context";

function Home() {
  const { data, error, fetchedDetails, setFetchedDetails } =
    useContext(Context);

  // parse and set fetched details
  useHandleDetails(setFetchedDetails, data, error);

  return (
    <div
      style={{
        backgroundImage: `url(${
          Utilites.handleWeatherIcon(fetchedDetails.weather).bg
        })`,
      }}
      className=" App relative px-[2rem] sm:pl-[4rem] sm:pr-0 flex flex-col sm:flex-row sm:justify-between text-[var(--gray)] h-screen w-screen bg-cover bg-center ring-3"
    >
      <Components.Logo />

      {/* // Left side of the ui on desktop // */}
      <Components.Left />

      {/* // Right side of the ui on desktop // */}
      <Components.Right />
    </div>
  );
}

export default Home;
