import axios from "axios";

function useSearch() {
  const api = process.env.REACT_APP_ENDPOINT;
  const apiKey = process.env.REACT_APP_APIKEY;

  async function getQuerry(querry, setData, setError, setLoading) {
    if (querry.length < 2) {
      setError("querry too short 👀");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `${api}data/2.5/weather?q=${querry}&APPID=${apiKey}`,
      );
      if (response?.status !== 200) {
        throw new Error("There is an error while getting weather information");
      }
      setData(response?.data);
    } catch (error) {
      console.error(error?.response?.data?.message);
      setError(`⚠️ ${error?.response?.data?.message}`);
    } finally {
      setLoading(false);
    }
  }
  return [getQuerry];
}

export default useSearch;
