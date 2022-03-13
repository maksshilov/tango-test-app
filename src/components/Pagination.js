import React, { Fragment, useContext } from "react";
import { Context } from "../context/Context";

export const Pagination = () => {
  const { firstPage, prevPage, nextPage, lastPage, state } =
    useContext(Context);

  return (
    <Fragment>
      <div className="row text-center mb-3">
        <small>
          Page {state.page} from {state.totalPages}
        </small>
      </div>
      <div className="row">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button className="page-link" onClick={firstPage}>
                First Page
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={prevPage}>
                Previos
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={nextPage}>
                Next
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={lastPage}>
                Last Page
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};
