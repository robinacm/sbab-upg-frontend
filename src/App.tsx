import React, {useEffect, useState} from "react";
import { BusLine } from "./interfaces";
import LineList from "./lineList/LineList";

const App = () => {
  const [busLines, setBusLines] = useState<Array<BusLine>>([]);

  useEffect(() => {
    fetchTopBusLines();
  }, [])

  const fetchTopBusLines = () => {
    fetch('http://localhost:8080/top-bus-lines')
      .then(response => {
        if (!response.ok) {
          throw new Error('Dåligt svar från nätverket, hantera fel');
        }
        return response.json();
      })
      .then(data => {
        setBusLines(data);
      })
      .catch(error => {
        console.error('Problem med fetch, se över fel:', error);
      });
  }

  // Anropet är lite trögt, kanske är önskvärt att lägga till en spinner medan vi väntar in resultat
  return (
    <div>
      <LineList busLines={busLines} />
    </div>
  );
}

export default App;
