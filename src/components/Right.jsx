import Form from "./ui/Form";
import PreLocation from "./ui/PreLocation";
import WeatherInfo from "./ui/WeatherInfo";

function Right() {
  return (
    <section className=" Right rounded-b-3xl sm:rounded-none order-1 mt-[5rem] sm:mt-0 pb-[2rem] sm:pb-0 sm:order-2 flex self-end flex-col gap-[3rem] w-full sm:w-[45rem] h-fit sm:h-full bg-[#282323] bg-opacity-50 pl-[2rem] ">
      {/* // search ul //  */}
      <Form />

      {/* // sidebar-body // */}
      <div className=" Body flex flex-col gap-[2rem] sm:gap-[3rem] pr-[2.2rem]">
        {/* // preLocations // */}
        <PreLocation />

        {/* // weather Information // */}
        <WeatherInfo />
      </div>
    </section>
  );
}

export default Right;
