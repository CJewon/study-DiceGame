import MyDice from "./MyDice";
import OtherDice from "./OtherDice";
import css from "./css/App.css";
import logo from "./img/logo.png";
import { useState } from "react";

function App() {
  const [myDiceNum, setMyDiceNum] = useState(1);
  const [otherDiceNum, setOtherDiceNum] = useState(1);

  return (
    <div class="App">
      <div>
        <img class="App-logo" src={logo} alt="주사위게임 로고" />
        <h1 class="App-title">주사위게임</h1>
        <div>
          <button class="Button blue App-button">던지기</button>
          <button class="Button red App-button">처음부터</button>
        </div>
      </div>
      <div class="App-boards">
        <div class="Board App-board">
          <h2 class="Board-heading">나</h2>
          <MyDice></MyDice>
          <h2 class="Board-heading">기록</h2>
          <p></p>
          <h2 class="Board-heading">총점</h2>
          <p>0</p>
        </div>
        <div class="Board App-board">
          <h2 class="Board-heading">상대</h2>
          <OtherDice></OtherDice>
          <h2 class="Board-heading">기록</h2>
          <p></p>
          <h2 class="Board-heading">총점</h2>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default App;
