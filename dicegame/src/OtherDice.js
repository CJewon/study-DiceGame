import RedDice01 from "./img/dice-red-1.svg";
import RedDice02 from "./img/dice-red-2.svg";
import RedDice03 from "./img/dice-red-3.svg";
import RedDice04 from "./img/dice-red-4.svg";
import RedDice05 from "./img/dice-red-5.svg";
import RedDice06 from "./img/dice-red-6.svg";
import React, { useState } from "react";

export default function OtherDice() {
  const [otherDice, setOtherDice] = useState(RedDice01);
  return <img src={otherDice} alt="" />;
}
