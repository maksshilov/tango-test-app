import React, { useContext } from "react";
import { Context } from "../context/Context";

export const DropdownPageSize = () => {
  const { setPageSize, state } = useContext(Context);
  return (
    <div className="dropdown">
      <button
        className="btn  dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {state.pageSize} Results per page
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <button className="dropdown-item" onClick={() => setPageSize(10)}>
            10
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => setPageSize(25)}>
            25
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => setPageSize(50)}>
            50
          </button>
        </li>
      </ul>
    </div>
  );
};
