import BlueDice01 from "./img/dice-blue-1.svg";
import BlueDice02 from "./img/dice-blue-2.svg";
import BlueDice03 from "./img/dice-blue-3.svg";
import BlueDice04 from "./img/dice-blue-4.svg";
import BlueDice05 from "./img/dice-blue-5.svg";
import BlueDice06 from "./img/dice-blue-6.svg";

const MyDiceImgs = {
  1: BlueDice01,
  2: BlueDice02,
  3: BlueDice03,
  4: BlueDice04,
  5: BlueDice05,
  6: BlueDice06,
};

export default function MyDice({ value }) {
  const diceImg = MyDiceImgs[value];
  return <img src={diceImg} alt="1" />;
}
