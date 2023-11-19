import React from "react";
// @ts-ignore
import styles from "./BustStop.module.css";

interface Props {
  stopName: string;
}

const BusStop = ({stopName}: Props) => {

  return <div className={styles.container}>Bus stop: {stopName}</div>
}

export default BusStop;