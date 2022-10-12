import React from "react";
import { MDBCard, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import Form from "./form";
import List from "./list";
import "./index.css";
import Pagination from "./pagination";

const Initial = () => {
  return (
    <MDBContainer fluid className="h-100 d-flex align-items-center">
      <MDBCol md={6} className="offset-md-3">
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
