import * as Utilites from "./../Utilities/index";
import { preLocation } from "./Right";

function PreLocation({ setQuerry }) {
  return (
    <ul className=" listStyle">
      {preLocation.map((loc, idx) => (
        <li
          className=" cursor-pointer"
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
