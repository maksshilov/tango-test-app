import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import CharacterRow from "../components/CharacterRow";
import { Context } from "../context/Context";
import { Loader } from "../components/Loader";
import { Pagination } from "../components/Pagination";
import { CharacterData } from "../components/CharacterData";

export default function Characters() {
  const { setData, showLoader, hideLoader, setTotalPages, state } =
    useContext(Context);

  const getCharacter = useCallback(async () => {
    showLoader();
    return await fetch(
      `https://anapioficeandfire.com/api/characters?page=${state.page}&pageSize=${state.pageSize}`
    )
      .then((res) => {
        setTotalPages(
          res.headers
            .get("link")
            .split(",")
            .pop()
            .replace(/[^0-9 ]/g, " ")
            .trim()
            .replace(/^ +| +$|( ) +/g, "$1")
            .split(" ")[0]
        );
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .finally(() => hideLoader());
  }, [state.page, state.pageSize]);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  return (
    <Fragment>
      <Pagination />
      {state.loading ? (
        <Loader />
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" style={{ width: "40%" }}>
                Character
              </th>
              <th scope="col">Alive</th>
              <th scope="col">Gender</th>
              <th scope="col">Culture</th>
              <th scope="col">Allegiances</th>
            </tr>
          </thead>
          <tbody>
            <CharacterData />
          </tbody>
        </table>
      )}
    </Fragment>
  );
}
