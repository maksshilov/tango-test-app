import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import CharacterRow from "./CharacterRow";

export const CharacterData = () => {
  const { state } = useContext(Context);
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    if (state.data) {
      setFilteredData(state.data);
    }
  }, [state.data]);

  useEffect(() => {
    let filteredDataByGender = {};
    let filteredDataByCulture = {};

    if (state.data) {
      if (state.gender === "Any") {
        filteredDataByCulture = state.data.filter((char) =>
          char.culture
            .toLowerCase()
            .includes(state.culture.trim().toLowerCase())
        );
        setFilteredData(() => filteredDataByCulture);
      } else {
        filteredDataByCulture = state.data.filter((char) =>
          char.culture
            .toLowerCase()
            .includes(state.culture.trim().toLowerCase())
        );

        filteredDataByGender = filteredDataByCulture.filter(
          (char) => char.gender === state.gender
        );

        setFilteredData(() => filteredDataByGender);
      }
    }
  }, [state.gender, state.culture]);

  if (filteredData) {
    return filteredData.map((char, i) => (
      <CharacterRow key={i} charData={char} />
    ));
  } else {
    return null;
  }
};
