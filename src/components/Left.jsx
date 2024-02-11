import * as Utilites from "./../Utilities/index";

function Left({ fetchedDetails }) {
  return (
    <section className=" relative pl-[4rem] py-[2rem] ring-1 w-full">
      <h1 className=" cursor-pointer absolute top-[1.2rem] text-[1.2rem] text-[var(--white)] font-bold">
        the.weatherapp
      </h1>
      <div className=" absolute bottom-[5rem] flex gap-[1rem]">
        <h2 className=" text-[3.6rem] font-bold ">{fetchedDetails.temp}</h2>
        <div className="text-[var(--white)] self-end">
          <h3 className=" text-[2rem]">{fetchedDetails.city}</h3>
          <small className=" text-[1rem]">{Utilites.date()}</small>
        </div>
        <div className=" flex flex-col items-center self-end">
          <img
            className=" "
            src={Utilites.handleWeatherIcon(fetchedDetails.weather).icon}
            alt="search"
          />
          <small className=" text-[.8rem] text-[var(--white)] font-bold">
            {fetchedDetails.weather}
          </small>
        </div>
      </div>
    </section>
  );
}
export default Left;
