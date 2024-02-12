import SEARCH from "./../../asset/search.png";
import LOADER from "./../../asset/Winter.gif";

import * as Utility from "../../Utilities/index";
import { useContext } from "react";
import Context from "../../Context/Context";

function Form() {
  const {
    getQuerry,
    querry,
    setQuerry,
    setData,
    setError,
    loading,
    setLoading,
  } = useContext(Context);
  return (
    <form className=" flex justify-between h-fit items-center">
      <input
        type="search"
        placeholder="Another Location"
        value={querry}
        onChange={(e) => setQuerry(e.target.value)}
        className=" text-[1.9rem] w-[72%] h-[6rem] self-end pt-[1.3rem] pb-[.9rem] outline-none bg-transparent borderLine"
      />
      <button
        className=" flex justify-center items-center h-full w-[23%] bg-[var(--tile)] searchHover"
        onClick={(e) =>
          Utility.handleSubmit(
            e,
            getQuerry,
            querry,
            setData,
            setError,
            setLoading,
          )
        }
      >
        <img
          className=" h-full object-contain scale-50"
          src={loading ? LOADER : SEARCH}
          alt="search"
        />
      </button>
    </form>
  );
}

export default Form;
