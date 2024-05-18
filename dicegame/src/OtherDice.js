import RedDice01 from "./img/dice-red-1.svg";
import RedDice02 from "./img/dice-red-2.svg";
import RedDice03 from "./img/dice-red-3.svg";
import RedDice04 from "./img/dice-red-4.svg";
import RedDice05 from "./img/dice-red-5.svg";
import RedDice06 from "./img/dice-red-6.svg";

const OtherDiceImgs = {
  1: RedDice01,
  2: RedDice02,
  3: RedDice03,
  4: RedDice04,
  5: RedDice05,
  6: RedDice06,
};

export default function OtherDice({ value }) {
  const OtherDiceImg = OtherDiceImgs[value];
  return <img src={OtherDiceImg} alt="" />;
}
