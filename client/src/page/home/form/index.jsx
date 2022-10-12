import React from "react";
import { MDBInputGroup, MDBBtn, MDBCardHeader } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { SAVE } from "../../../redux/slices/tasks";

export default function Form() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { name } = e.target;

    dispatch(SAVE({ name: name.value }));
    e.target.reset();
  };

  return (
    <MDBCardHeader>
      <form onSubmit={handleSubmit}>
        <MDBInputGroup>
          <input
            className="form-control"
            placeholder="Task name"
            name="name"
            type="text"
            required
          />
          <MDBBtn type="submit" outline>
            submit
          </MDBBtn>
        </MDBInputGroup>
      </form>
    </MDBCardHeader>
  );
}
