import React from "react";
import {BusLine} from "../interfaces";
import Line from "./line/Line";

interface Props {
  busLines: Array<BusLine>;
}

const LineList = ({busLines}: Props) => {
  console.log("buslines test: ", busLines)

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <div>
        <div>Top 10 lines:</div>
      </div>
      {busLines.map(busLine => <Line line={busLine} />)}
    </div>
  );
}

export default LineList;