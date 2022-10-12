import React, { useEffect } from "react";
import { MDBCardBody, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { BROWSE } from "../../../redux/slices/tasks";

import Loader from "./loader";
import Filler from "./filler";

export default function List() {
  const { tasks, page, maxPage, isLoading } = useSelector(state => state.tasks),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(BROWSE({ page, maxPage }));
  }, [page]);

  return (
    <MDBCardBody>
      <MDBListGroup>
        {isLoading ? (
          <Loader />
        ) : tasks.length > 0 ? (
          <Filler />
        ) : (
          <MDBListGroupItem className="text-center">
            <i>Tasks are empty</i>
          </MDBListGroupItem>
        )}
      </MDBListGroup>
    </MDBCardBody>
  );
}
