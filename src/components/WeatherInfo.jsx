function WeatherInfo({ fetchedDetails }) {
  const weatherDetails = [
    { name: "cloudy", value: fetchedDetails?.cloudy },
    { name: "Humidity", value: fetchedDetails?.humidity },
    { name: "Wind", value: fetchedDetails?.wind },
  ];
  return (
    <div className=" flex flex-col gap-[2.7rem] borderLine">
      <h1 className=" text-[var(--white)] text-[1.3rem]">Weather Details</h1>
      <ul className=" listStyle ">
        {weatherDetails.map((obj, idx) => (
          <li key={idx} className=" flex justify-between w-full">
            <p>{obj.name}</p>
            <p>{obj.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherInfo;
