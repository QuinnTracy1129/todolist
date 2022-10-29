import React from "react";
import { MDBCard, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import Form from "./form";
import List from "./list";
import "./index.css";
import Pagination from "./pagination";

const Initial = () => {
  return (
    <MDBContainer fluid className="h-100 d-flex align-items-center">
      <MDBCol md={6} sm={10} size={12} className="offset-md-3 offset-sm-1">
        <MDBCard className="border border-dark">
          <Form />
          <List />
          <Pagination />
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
};

export default Initial;
