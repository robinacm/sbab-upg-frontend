import React from "react";
import {BusLine} from "../../interfaces";
import BusStop from "./busStop/BusStop";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
// @ts-ignore
import styles from "./Line.module.css";

interface Props {
  line: BusLine;
}

const Line = ({line}: Props) => {

  return (
    <div className={styles.container}>
      <Accordion>
        <AccordionSummary>
          <div className={styles.summary}>
            <div>Line: {line.line}</div>
            <div>Amount of stops: {line.numberOfStops}</div>
          </div>
        </AccordionSummary>
        <AccordionDetails>{line.stopPoints.map(stop => <BusStop stopName={stop} />)}</AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Line;