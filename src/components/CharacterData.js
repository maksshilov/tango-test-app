import React, { useContext } from "react";
import { Context } from "../context/Context";
import CharacterRow from "./CharacterRow";

export const CharacterData = () => {
  const { state } = useContext(Context);

  if (state.data) {
    let charData;

    if (state.gender === "Any") {
      charData = state.data.map((char, i) => (
        <CharacterRow key={i} charData={char} />
      ));
    } else {
      charData = state.data.filter((char) => char.gender === state.gender);
      charData = charData.map((char, i) => (
        <CharacterRow key={i} charData={char} />
      ));
    }
    return charData;
  } else {
    return null;
  }
};
