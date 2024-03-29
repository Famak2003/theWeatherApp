import { useContext } from "react";
import Context from "../../Context/Context";

function WeatherInfo() {
  const { fetchedDetails } = useContext(Context);
  const weatherDetails = [
    { name: "cloudy", value: fetchedDetails?.cloudy },
    { name: "Humidity", value: fetchedDetails?.humidity },
    { name: "Wind", value: fetchedDetails?.wind },
  ];
  return (
    <div className=" flex flex-col gap-[2rem] sm:gap-[3rem] borderLine">
      <h1 className=" text-[var(--white)] text-[1.9rem]">Weather Details</h1>
      {/* // loop through weatherDetails, to style them accordingly // */}
      <ul className=" listStyle ">
        {weatherDetails.map((obj, idx) => (
          <li key={idx} className=" flex justify-between w-full textHoverWhite">
            <p>{obj.name}</p>
            <p>{obj.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherInfo;
