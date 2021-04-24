import "./style.css";
import { useState, useEffect } from "react";
const list = [
  {
    question: "capital of india?",
    answerOption: [
      { id: 1, option: "delhi", value: "correct" },
      { id: 2, option: "bombay", value: "incorrect" },
      { id: 3, option: "kolkata", value: "incorrect" },
      { id: 4, option: "chennai", value: "incorrect" }
    ]
  },
  {
    question: "capital of usa?",
    answerOption: [
      { id: 1, option: "new york", value: "incorrect" },
      { id: 2, option: "hawai", value: "incorrect" },
      { id: 3, option: "washington dc", value: "correct" },
      { id: 4, option: "los angeles", value: "incorrect" }
    ]
  },
  {
    question: "capital of afghanistan?",
    answerOption: [
      { id: 1, option: "Baghlan Province", value: "incorrect" },
      { id: 2, option: "kabul", value: "correct" },
      { id: 3, option: "Takhar Province ", value: "incorrect" },
      { id: 4, option: "Bulkh Province", value: "incorrect" }
    ]
  }
];
const arr = ["delhi", "washington dc", "kabul"];
export default function App() {
  const [options, setOptions] = useState(list);
  const [count, setCount] = useState(1);
  const [score, setscore] = useState(0);
  const [check, setcheck] = useState("");
  const [flag, setFlag] = useState(true);
  const [style, setStyle] = useState("");
  const [o, setO] = useState("");
  const [show, setShow] = useState(false);

  const [arry, setArr] = useState([]);
  const handleNext = () => {
    console.log(options.length);
    if (count < options.length) {
      setCount(count + 1);
    } else {
      alert("no more questions...");
    }
    //setOptions();
  };
  const handleBack = () => {
    if (count === 1) {
      alert("you can't go back");
    } else if (count <= options.length) {
      setCount(count - 1);
    }
  };
  const handleClick = (o, v, i, x) => {
    console.log(i, x);
    if (x.value === "incorrect") {
      setFlag(false);
    } else {
      setFlag(true);
    }
    // const currentState = this.state.active;
    //     this.setState({ active: !currentState })
    if (v === "correct") {
      setscore(score + 1);
    } else {
      setShow(true);
      setArr(arr[count - 1]);
      setO(o);
    }
  };
  // const determineItemStyle = (i) => {
  //   console.log(i);
  //   const find = options[count - 1].answerOption.find((x) => {
  //     return x.id === i;
  //   });
  //   console.log(find);
  // };

  return (
    <>
      <div className="App">
        <h1>QUIZ APP</h1>
      </div>{" "}
      <h5>
        {count}/{options.length}
      </h5>
      <div className="sidebyside">
        <div>
          {count}
          {") "}
          {options[count - 1].question}
          {options[count - 1].answerOption.map((x) => {
            return (
              <li
                style={{ cursor: "pointer", marginLeft: "15px" }}
                onClick={() => handleClick(x.option, x.value, x.id, x)}
                className={flag ? "able" : "disable"}
              >
                {x.option}
              </li>
            );
          })}
        </div>
        {/* <button className={style ? "a" : "b"} onClick={clickHandler}>
      {style ? "click" : "dontclick"}
    </button> */}
        <div className="score"> Score:{score} </div>
      </div>
      <br />
      {show ? (
        <>
          <div>correct answer is :{arry}</div>
          <div>you chose :{o}</div>
        </>
      ) : (
        ""
      )}
      <button onClick={handleNext} className="btn">
        next
      </button>
      <button onClick={handleBack} className="btn">
        back
      </button>
    </>
  );
}
