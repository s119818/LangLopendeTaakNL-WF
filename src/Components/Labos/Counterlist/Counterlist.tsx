import React, { useState } from "react"

export const CounterList = () => {
    const [counters, setCounters] = useState<number[]>([]);
    
    const addCounter = () => {
        setCounters([...counters, 0]);
    }

    const increaseCounter = (index: number) => {
        let counterCpy = [...counters.slice(0, index), counters[index] + 1, ...counters.slice(index + 1)];
        setCounters(counterCpy);
    }

    const decreaseCounter = (index: number) => {
        let counterCpy = [...counters.slice(0, index), counters[index] - 1, ...counters.slice(index + 1)];
        setCounters(counterCpy);
    }
return(
    <>
    {counters.map((counter, index) => {
        let color = 'black';
        if (counter > 0) {
            color = 'green';
        } else if (counter < 0) {
            color = 'red';
        }
        return (
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent:"center"}}>
                <button onClick={() => decreaseCounter(index)}>Omlaag</button>
                <div style={{flex: 1, display: "flex", justifyContent: "center", alignItems:"center", color: color}}>Count: {counter}</div>
                <button onClick={() => increaseCounter(index)}>Omhoog</button>
            </div>    
        )
    })}
    <p>Som van de tellers: {counters.reduce((prev, curr) => prev + curr, 0)}</p>
    <button onClick={addCounter}>Voeg teller toe</button>
</>
)
  }