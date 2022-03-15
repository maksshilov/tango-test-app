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

const handlers = {
  [SET_DATA]: (state, { data }) => ({ ...state, data }),
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [HIDE_LOADER]: (state) => ({ ...state, loading: false }),
  [SET_PAGE_SIZE]: (state, { pageSize }) => ({ ...state, pageSize }),
  [SET_TOTAL_PAGES]: (state, { totalPages }) => ({ ...state, totalPages }),
  [FIRST_PAGE]: (state, { page }) => ({ ...state, page }),
  [PREV_PAGE]: (state, { page }) => ({ ...state, page }),
  [NEXT_PAGE]: (state, { page }) => ({ ...state, page }),
  [LAST_PAGE]: (state, { page }) => ({ ...state, page }),
  [SET_GENDER]: (state, { gender }) => ({ ...state, gender }),
  [CULTURE_FILTER]: (state, { culture }) => ({ ...state, culture }),
  DEFAULT: (state) => state,
};

export const Reducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
