import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { Context } from "../context/Context";

export const Allegiances = () => {
  const { showLoader, hideLoader, state } = useContext(Context);
  let params = useParams();
  const location = useLocation();
  const [data, setData] = useState("");

  const getAllegianceInfo = async () => {
    showLoader();
    if (location.state) {
      return await fetch(location.state.url)
        .then((res) => res.json())
        .then((json) => {
          setData(json);
        })
        .finally(() => hideLoader());
    } else {
      return await fetch(
        `https://anapioficeandfire.com/api/houses/${params.houseId}`
      )
        .then((res) => res.json())
        .then((json) => {
          setData(json);
        })
        .finally(() => hideLoader());
    }
  };

  useEffect(() => {
    getAllegianceInfo();
  }, []);

  return (
    <Fragment>
      {state.loading ? (
        <Loader />
      ) : (
        <div className="row">
          <div className="col-md-auto">
            <h2>{data.name ? data.name : "Unknown"}</h2>
          </div>
          <div className="col-4">
            <ul className="list-group">
              <li className="list-group-item">
                <div>
                  <strong>Region</strong>
                </div>
                {data.region ? data.region : "Unknown"}
              </li>
              <li className="list-group-item">
                <div>
                  <strong>Coat of Arms</strong>
                </div>
                {data.coatOfArms ? data.coatOfArms : "Unknown"}
              </li>
              <li className="list-group-item">
                <div>
                  <strong>Words</strong>
                </div>
                {data.words ? data.words : "Unknown"}
              </li>
              <li className="list-group-item">
                <div>
                  <strong>Titles</strong>
                </div>
                {data.titles
                  ? data.titles[0]
                    ? data.titles.map((t, i) => <div key={i}>{t}</div>)
                    : "Unknown"
                  : "Unknown"}
              </li>
              <li className="list-group-item">
                <div>
                  <strong>Seats</strong>
                </div>
                {data.seats
                  ? data.seats[0]
                    ? data.seats.map((t, i) => <div key={i}>{t}</div>)
                    : "Unknown"
                  : "Unknown"}
              </li>
              <li className="list-group-item">
                <div>
                  <strong>Has died out</strong>
                </div>
                {data.diedOut ? `Yes, at ${data.diedOut}` : "No"}
              </li>
              <li className="list-group-item">
                <div>
                  <strong>Has overlord</strong>
                </div>
                {data.overlord ? "Yes" : "No"}
              </li>
              <li className="list-group-item">
                <div>
                  <strong>Number of Cadet Branches</strong>
                </div>
                {data.cadetBranches ? data.cadetBranches.length : "Unknown"}
              </li>
            </ul>
          </div>
        </div>
      )}
    </Fragment>
  );
};
