import React, { useState } from 'react';
import slotCherry from './assets/images/pictures/cherry.png';
import slotLemon from './assets/images/pictures/lemon.png'
import slotMelon from './assets/images/pictures/melon.png'
import slotPrune from './assets/images/pictures/prune.png'
import slotSeven from './assets/images/pictures/slotSeven.png'
export const Slot = ({ value }: { value: number }) => {
    let img = slotCherry;
    switch (value) {
      case 0: img = slotCherry; break;
      case 1: img = slotLemon; break;
      case 2: img = slotMelon; break;
      case 3: img = slotPrune; break;
      case 4: img = slotSeven; break;
    }
    return (
      <div className="slot">
        <img src={img}/>
      </div>
    );
  };
  
  const getSlots = (slots: number) => {
    let slotNumbers: number[] = Array.from(Array(slots).keys()).map(() =>
      Math.floor(Math.random() * 5)
    );
    return slotNumbers;
  }
  
  
  export const SlotMachine = ({ slots }: { slots: number }) => {
    const [slotNumbers, setSlotNumbers] = useState(getSlots(slots));
    const [money, setMoney] = useState(100);
  
    const isWinning = () => {
      let winning = slotNumbers.every((slot) => slot === slotNumbers[0]);
      return winning;
    }
  
    const pullLever : React.MouseEventHandler<HTMLButtonElement> = () => {
      setSlotNumbers(getSlots(slots));
      if (isWinning()) {
        setMoney(money + 20);
      } else {
        setMoney(money => money - 1);
      }
    }
  
  
    return (
      <div className="slotMachineContainer">
        {money > 0 && <div>Saldo: €{money}</div>}
        <div className="slotMachineSubContainer">
          <button className="lever" onClick={pullLever} disabled={money > 0 ? false : true}>Pull Lever</button>
          {slotNumbers.map((slot, i) => (
            <Slot value={slot} key={i} />
          ))}
        </div>
        {money == 0 && <p className="linearWipe">Je bent bankroet!</p>}
   
      </div>
    );
  };
  