import { useContext } from "react";
import * as Utilites from "../../Utilities/index";
import Context from "../../Context/Context";

function TempDetails() {
  const { fetchedDetails } = useContext(Context);
  return (
    // display temperature details accordingly //
    <div className=" self-end flex xs:gap-[.5rem] ss:gap-[1rem]">
      <h2 className=" text-[5rem] sstext-[6rem] font-semibold textHoverWhite ">
        {fetchedDetails.temp}
      </h2>
      <div className="text-[var(--white)] self-end">
        <h3 className=" text-[2.5rem]">{fetchedDetails.city}</h3>
        <small className=" text-[1.7rem] ss:whitespace-nowrap textHoverBlack">
          {Utilites.date()}
        </small>
      </div>
      <div className=" flex flex-col items-center h-full self-end w-[6rem]">
        <img
          className="object-contain h-full"
          src={Utilites.handleWeatherIcon(fetchedDetails.weather).icon}
          alt="weather-details"
        />
        <small className=" text-[1.2rem] text-[var(--white)] font-bold textHoverBlack">
          {fetchedDetails.weather}
        </small>
      </div>
    </div>
  );
}

export default TempDetails;
