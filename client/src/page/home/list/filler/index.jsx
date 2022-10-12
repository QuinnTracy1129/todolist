import React, { useState, useEffect } from "react";
import { MDBListGroupItem, MDBBtn } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import Item from "../card";

export default function Filler() {
  const { tasks } = useSelector(state => state.tasks),
    [filler, setFiller] = useState([]);

  useEffect(() => {
    setFiller(Array.from(Array(5 - tasks.length)));
  }, [tasks]);

  return (
    <div>
      {tasks.map(task => (
        <Item key={`task-${task._id}`} task={task} />
      ))}
      {filler.map((_, index) => (
        <MDBListGroupItem key={`loader-${index}`} className="invisible">
          <MDBBtn size="sm">ha</MDBBtn>
        </MDBListGroupItem>
      ))}
    </div>
  );
}
