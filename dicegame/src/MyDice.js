import BlueDice01 from "./img/dice-blue-1.svg";
import BlueDice02 from "./img/dice-blue-2.svg";
import BlueDice03 from "./img/dice-blue-3.svg";
import BlueDice04 from "./img/dice-blue-4.svg";
import BlueDice05 from "./img/dice-blue-5.svg";
import BlueDice06 from "./img/dice-blue-6.svg";
import React, { useState } from "react";

export default function MyDice() {
  const [myDice, setMyDice] = useState(BlueDice01);
  return <img src={myDice} alt="" />;
}
