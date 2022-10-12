import React from "react";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBIcon,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { DESTROY, UPDATE } from "../../../redux/slices/tasks";

export default function Item({ task }) {
  const dispatch = useDispatch();

  const handleComplete = () =>
    Swal.fire({
      icon: "info",
      title: `Are you done?`,
      text: "You won't be able to revert this",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "Cancel",
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(
          UPDATE({
            id: task._id,
            data: {
              isCompleted: true,
            },
          })
        );
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

  const handleDelete = () =>
    Swal.fire({
      icon: "warning",
      title: `Are you sure to delete this?`,
      text: "You won't be able to revert this",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: "Cancel",
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(DESTROY(task._id));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

  return (
    <MDBListGroupItem className="d-flex justify-content-between align-items-center">
      {task.isCompleted ? (
        <strike className="text-capitalize">{task.name}</strike>
      ) : (
        <span className="text-capitalize">{task.name}</span>
      )}

      <MDBBtnGroup>
        {!task.isCompleted && (
          <MDBBtn onClick={handleComplete} size="sm" color="success">
            <MDBIcon icon="check" />
          </MDBBtn>
        )}
        <MDBBtn onClick={handleDelete} size="sm" color="danger">
          <MDBIcon icon="trash" />
        </MDBBtn>
      </MDBBtnGroup>
    </MDBListGroupItem>
  );
}
