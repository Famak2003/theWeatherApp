import SEARCH from "./../asset/search.png";
import LOADER from "./../asset/Winter.gif";

import * as Utility from "./../Utilities/index";

function Form({
  loading,
  querry,
  getQuerry,
  setQuerry,
  setData,
  setError,
  setLoading,
}) {
  return (
    <form className=" flex justify-between h-fit items-center">
      <input
        type="search"
        placeholder="Another Location"
        value={querry}
        onChange={(e) => setQuerry(e.target.value)}
        className=" text-[1.8rem] w-[75%] h-[4rem] self-end pt-[1rem] pb-[.5rem] outline-none bg-transparent borderLine"
      />
      <button
        className=" flex justify-center items-center h-full w-[18%] bg-[var(--tile)]"
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
