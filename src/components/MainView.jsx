import "./MainView.css";
import { useEffect } from "react";
import { useState } from "react";

function MainView(props) {
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const [questions, setQuestions] = useState();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hackurity01/simple-diary/main/src/questions.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestions(data); //object
      });
  }, []);

  if (!questions) {
    return null;
  }

  return (
    <>
      <div className="header">
        <div>
          {year}년 {month}월 {date}일
        </div>
        <div>
          <button
            className="history-btn"
            onClick={() => {
              // HistoryView 화면으로 전환
              props.setView("history");
            }}
          >
            기록 보기
          </button>
        </div>
      </div>
      <div className="question">{questions[date]}</div>
      <div className="content">
        <textarea
          onChange={() => {
            console.log("onChange");
          }}
        />
      </div>
    </>
  );
}

export default MainView;
