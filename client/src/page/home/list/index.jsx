import React, { useEffect } from "react";
import { MDBCardBody, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { BROWSE } from "../../../redux/slices/tasks";
import Loader from "./loader";
import Item from "./card";

export default function List() {
  const { tasks, page, maxPage, isLoading } = useSelector(state => state.tasks),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(BROWSE({ page, maxPage }));
  }, [page, maxPage, dispatch]);

  return (
    <MDBCardBody style={{ minHeight: 277.5 }}>
      <MDBListGroup>
        {isLoading ? (
          <Loader />
        ) : tasks.length > 0 ? (
          tasks.map(task => <Item key={`task-${task._id}`} task={task} />)
        ) : (
          <MDBListGroupItem className="text-center">
            <i>Tasks are empty</i>
          </MDBListGroupItem>
        )}
      </MDBListGroup>
    </MDBCardBody>
  );
}
