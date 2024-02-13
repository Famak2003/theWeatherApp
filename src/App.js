import { useContext, useEffect } from "react";
import { useLocator } from "./hooks";
import Home from "./pages/Home";
import Context from "./Context/Context";

function App() {
  const { getQuerry, setData, setError, setLoading, locationName } =
    useContext(Context);

  const [getCord] = useLocator();
  // gets and sets user's location
  useEffect(() => {
    getCord();
  }, [getCord]);

  //checks if location is available, then get location information
  useEffect(() => {
    if (locationName) {
      getQuerry(locationName, setData, setError, setLoading);
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationName, setData, setError, setLoading]);

  return (
    <div className=" overflow-hidden flex justify-center items-center ring-1">
      <Home />
    </div>
  );
}

export default App;
