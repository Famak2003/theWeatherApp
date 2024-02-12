import { useContext } from "react";
import * as Utilites from "../../Utilities/index";
import Context from "../../Context/Context";
export const preLocation = ["Cyprus", "Nicosia", "New York", "Nigeria"];

function PreLocation() {
  const { setQuerry } = useContext(Context);
  return (
    // loop through preLocation data, to style them accordingly //
    <ul className=" listStyle">
      {preLocation.map((loc, idx) => (
        <li
          className=" cursor-pointer textHoverWhite"
          onClick={(e) => Utilites.handlePreLocation(e, setQuerry)}
          key={idx}
        >
          {loc}
        </li>
      ))}
    </ul>
  );
}

export default PreLocation;
