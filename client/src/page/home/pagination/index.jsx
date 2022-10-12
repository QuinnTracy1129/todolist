import React from "react";
import { MDBBtn, MDBBtnGroup, MDBCardFooter, MDBIcon } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { PAGINATION } from "../../../redux/slices/tasks";

export default function Pagination() {
  const { page, totalPages } = useSelector(state => state.tasks),
    dispatch = useDispatch();

  const handlePage = (action = false) => {
    if (action) {
      page < totalPages && dispatch(PAGINATION(page + 1));
    } else {
      page > 1 && dispatch(PAGINATION(page - 1));
    }
  };

  return (
    <MDBCardFooter className="text-end">
      <MDBBtnGroup>
        <MDBBtn size="sm" disabled={page <= 1} onClick={() => handlePage()}>
          <MDBIcon icon="angle-double-left" />
        </MDBBtn>
        <MDBBtn className="text-lowercase" size="sm">
          {page} of {totalPages}
        </MDBBtn>
        <MDBBtn
          size="sm"
          onClick={() => handlePage(true)}
          disabled={page >= totalPages}
        >
          <MDBIcon icon="angle-double-right" />
        </MDBBtn>
      </MDBBtnGroup>
    </MDBCardFooter>
  );
}
