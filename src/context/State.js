import React, { useReducer } from "react";
import { Context } from "./Context";
import { Reducer } from "./Reducer";
import {
  CULTURE_FILTER,
  FIRST_PAGE,
  HIDE_LOADER,
  LAST_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
  SET_DATA,
  SET_GENDER,
  SET_PAGE_SIZE,
  SET_TOTAL_PAGES,
  SHOW_LOADER,
} from "./types";

export const State = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    data: null,
    page: 1,
    pageSize: 25,
    gender: "Any",
    culture: "",
  });

  const setData = (data) => {
    dispatch({
      type: SET_DATA,
      data,
    });
  };

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const setPageSize = (pageSize) => dispatch({ type: SET_PAGE_SIZE, pageSize });
  const setTotalPages = (totalPages) =>
    dispatch({ type: SET_TOTAL_PAGES, totalPages });
  const firstPage = () => dispatch({ type: FIRST_PAGE, page: 1 });
  const prevPage = () => {
    let { page } = state;
    page = page === 1 ? page : --page;

    dispatch({
      type: PREV_PAGE,
      page,
    });
  };
  const nextPage = () => {
    let { page, totalPages } = state;
    page = page === totalPages ? page : ++page;

    dispatch({
      type: NEXT_PAGE,
      page,
    });
  };
  const lastPage = () => dispatch({ type: LAST_PAGE, page: state.totalPages });
  const setGender = (gender) => dispatch({ type: SET_GENDER, gender });
  const cultureFilter = (culture) =>
    dispatch({ type: CULTURE_FILTER, culture });

  return (
    <Context.Provider
      value={{
        setData,
        showLoader,
        hideLoader,
        firstPage,
        prevPage,
        nextPage,
        lastPage,
        setPageSize,
        setTotalPages,
        setGender,
        cultureFilter,
        state,
      }}
    >
      {children}
    </Context.Provider>
  );
};
