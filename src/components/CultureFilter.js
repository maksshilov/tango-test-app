import React, { useContext } from "react";
import { Context } from "../context/Context";

export const CultureFilter = () => {
  const { cultureFilter } = useContext(Context);

  return (
    <div className="col-2">
      <input
        type="text"
        className="form-control"
        placeholder="Culture"
        onChange={(input) => cultureFilter(input.target.value)}
      />
    </div>
  );
};
