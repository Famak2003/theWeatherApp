import Form from "./Form";
import PreLocation from "./PreLocation";
import WeatherInfo from "./WeatherInfo";

export const preLocation = ["Cyprus", "Nicosia", "New York", "Nigeria"];

function Right({
  handleSubmit,
  loading,
  querry,
  setQuerry,
  fetchedDetails,
  getQuerry,
  setData,
  setError,
  setLoading,
}) {
  return (
    <section className=" Right flex flex-col gap-[2.5rem] self-end w-2/5 h-full bg-[#282323] bg-opacity-50 pl-[2rem] ">
      {/* // search ul //  */}
      <Form
        handleSubmit={handleSubmit}
        loading={loading}
        querry={querry}
        setQuerry={setQuerry}
        getQuerry={getQuerry}
        setData={setData}
        setError={setError}
        setLoading={setLoading}
      />

      {/* // body // */}
      <div className=" Body flex flex-col gap-[2.5rem] pr-[2rem]">
        {/* // preLocations // */}
        <PreLocation setQuerry={setQuerry} />

        {/* // weather Information // */}
        <WeatherInfo fetchedDetails={fetchedDetails} />
      </div>
    </section>
  );
}

export default Right;
