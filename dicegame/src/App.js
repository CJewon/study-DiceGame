import HandleClickButton from "./HandleClickButton";
import MyDice from "./MyDice";
import OtherDice from "./OtherDice";
import "./css/App.css";
import logo from "./img/logo.png";
import { useState, useEffect } from "react";

function App() {
  const [myDiceNum, setMyDiceNum] = useState(1);
  const [otherDiceNum, setOtherDiceNum] = useState(1);
  const [myTotalScore, setMyTotalScore] = useState(0);
  const [otherTotalScore, setOtherTotalScore] = useState(0);
  const [isInitial, setIsInitial] = useState(true);
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  useEffect(() => {
    if (!isInitial) {
      if (myDiceNum > otherDiceNum) {
        setMyTotalScore(prevScore => prevScore + 1);
      } else if (otherDiceNum > myDiceNum) {
        setOtherTotalScore(prevScore => prevScore + 1);
      }

      setMyHistory(prevHistory => [...prevHistory, myDiceNum]);
      setOtherHistory(prevHistory => [...prevHistory, otherDiceNum]);
    }
  }, [myDiceNum, otherDiceNum, isInitial]);

  function handleRandomDice() {
    const newMyDiceNum = HandleClickButton();
    const newOtherDiceNum = HandleClickButton();

    setMyDiceNum(newMyDiceNum);
    setOtherDiceNum(newOtherDiceNum);
    
    if (isInitial) {
      setIsInitial(false);
    }
  }

  function handleReset() {
    setMyDiceNum(1);
    setOtherDiceNum(1);
    setMyTotalScore(0);
    setOtherTotalScore(0);
    setIsInitial(true);
    setMyHistory([]);
    setOtherHistory([]);
  }

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logo} alt="주사위게임 로고" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <button className="Button blue App-button" onClick={handleRandomDice}>
            던지기
          </button>
          <button className="Button red App-button" onClick={handleReset}>
            처음부터
          </button>
        </div>
      </div>
      <div className="App-boards">
        <div className="Board App-board">
          <h2 className="Board-heading">나</h2>
          <MyDice value={myDiceNum}></MyDice>
          <h2 className="Board-heading">기록</h2>
          <p>{myHistory.join(', ')}</p>
          <h2 className="Board-heading">총점</h2>
          <p>{myTotalScore}</p>
        </div>
        <div className="Board App-board">
          <h2 className="Board-heading">상대</h2>
          <OtherDice value={otherDiceNum}></OtherDice>
          <h2 className="Board-heading">기록</h2>
          <p>{otherHistory.join(', ')}</p>
          <h2 className="Board-heading">총점</h2>
          <p>{otherTotalScore}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
