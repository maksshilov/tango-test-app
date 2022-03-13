import React, { useContext } from "react";
import { Context } from "../context/Context";

export const DropdownGenderFilter = () => {
  const { setGender, state } = useContext(Context);
  return (
    <div className="dropdown">
      <button
        className="btn  dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Gender: {state.gender}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <button className="dropdown-item" onClick={() => setGender("Any")}>
            Any
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => setGender("Male")}>
            Male
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => setGender("Female")}>
            Female
          </button>
        </li>
      </ul>
    </div>
  );
};
