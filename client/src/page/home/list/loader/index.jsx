import React from "react";
import { MDBListGroupItem, MDBSpinner } from "mdb-react-ui-kit";

export default function Loader() {
  const loader = Array.from(Array(5));

  return loader.map((_, index) => (
    <MDBListGroupItem key={`loader-${index}`} className="text-center">
      <MDBSpinner size="sm" grow />
    </MDBListGroupItem>
  ));
}
