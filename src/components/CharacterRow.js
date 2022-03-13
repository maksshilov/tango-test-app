import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function CharacterRow({ charData }) {
  const { name, aliases, born, died, gender, culture, allegiances } = charData;

  const CharacterNameAliases = () => {
    if (name && aliases) {
      if (aliases[0].length) {
        return `${name}, ${aliases.join(", ")}`;
      }
      return name;
    }
    if (!name) {
      return aliases.join(", ");
    }
    if (!aliases) {
      return name;
    }
  };

  const AllegiancesList = () => {
    if (allegiances.length) {
      return allegiances.map((url, i) => {
        let houseId = url.split("/").pop();
        return (
          <div key={i}>
            <Link to={`/allegiances/${houseId}`} state={{ url }}>
              {houseId}
            </Link>
          </div>
        );
      });
    } else {
      return "No allegiances";
    }
  };

  let alive;
  if (!born && !died) {
    alive = "Unknown";
  }
  if (!born) {
    alive = "No";
  }
  if (born && died) {
    let age;

    let bornYears = born
      .replace(/[^0-9 ]/g, "")
      .trim()
      .replace(/^ +| +$|( ) +/g, "$1")
      .split(" ")
      .sort((a, b) => a - b);

    let diedYears = died
      .replace(/[^0-9 ]/g, "")
      .trim()
      .replace(/^ +| +$|( ) +/g, "$1")
      .split(" ");

    if (bornYears.length === 2) {
      let age1 = diedYears[0] - bornYears[1],
        age2 = diedYears[0] - bornYears[0];
      age = `${age1}-${age2}`;
    } else {
      age = diedYears[0] - bornYears[0];
    }
    alive = `No, died at ${age} years old`;
  }
  if (born && !died) {
    alive = "Yes";
  }

  return (
    <Fragment>
      <tr>
        <th scope="row">
          <CharacterNameAliases />
        </th>
        <td>{alive}</td>
        <td>{gender}</td>
        <td>{culture ? culture : "Unknown"}</td>
        <td>
          <AllegiancesList />
        </td>
      </tr>
    </Fragment>
  );
}
