import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start.js";
import Timer from "./components/Timer.js";
import Trivia from "./components/Trivia.js";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which of the following graphs is a circle?",
      answers: [
        {
          text: "Pie chart",
          correct: true,
        },
        {
          text: "Scatter plot",
          correct: false,
        },
        {
          text: "Histogram",
          correct: false,
        },
        {
          text: "Line graph",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "To blow glass, it must first be:",
      answers: [
        {
          text: "Sanded",
          correct: false,
        },
        {
          text: "Heated",
          correct: true,
        },
        {
          text: "Flat",
          correct: false,
        },
        {
          text: "Frozen",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "In the alphabet song, how many letters are between L and S?",
      answers: [
        {
          text: "Five",
          correct: false,
        },
        {
          text: "Seven",
          correct: false,
        },
        {
          text: "Six",
          correct: true,
        },
        {
          text: "Nine",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of these animals is not a monkey?",
      answers: [
        {
          text: "Capuchin",
          correct: false,
        },
        {
          text: "Gorilla",
          correct: true,
        },
        {
          text: "Baboon",
          correct: false,
        },
        {
          text: "Marmoset",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which of the following women were French?",
      answers: [
        {
          text: "Indira Gandhi",
          correct: false,
        },
        {
          text: "Cleopatra",
          correct: false,
        },
        {
          text: "Catherine the Great",
          correct: false,
        },
        {
          text: "Joan of Arc",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Where was the Great Library in ancient Egypt?",
      answers: [
        {
          text: "Memphis",
          correct: false,
        },
        {
          text: "Giza",
          correct: false,
        },
        {
          text: "Alexandria",
          correct: true,
        },
        {
          text: "Cairo",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which of the following countries does not touch the Pacific Ocean?",
      answers: [
        {
          text: "Fiji",
          correct: false,
        },
        {
          text: "Morocco",
          correct: true,
        },
        {
          text: "Russia",
          correct: false,
        },
        {
          text: "Chile",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which of the following historical figures was in Night at the Museum?",
      answers: [
        {
          text: "Sacagawea",
          correct: true,
        },
        {
          text: "Pericles",
          correct: false,
        },
        {
          text: "Vlad the Impaler",
          correct: false,
        },
        {
          text: "King Tut",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which of the following colors is closest to burgundy?",
      answers: [
        {
          text: "Green",
          correct: false,
        },
        {
          text: "Red",
          correct: true,
        },
        {
          text: "Blue",
          correct: false,
        },
        {
          text: "Orange",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "All of the following are French words for sweet pastries with the exception of:",
      answers: [
        {
          text: "Mille-feuille",
          correct: false,
        },
        {
          text: "Macaron",
          correct: false,
        },
        {
          text: "Éclair",
          correct: false,
        },
        {
          text: "Croque monsieur",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Which of the following Asian countries is landlocked?",
      answers: [
        {
          text: "Bangladesh",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Nepal",
          correct: true,
        },
        {
          text: "China",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "The Nazca lines are a collection of geoglyphs in:",
      answers: [
        {
          text: "Peru",
          correct: true,
        },
        {
          text: "Mexico",
          correct: false,
        },
        {
          text: "Costa Rica",
          correct: false,
        },
        {
          text: "Cuba",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 100" },
        { id: 2, amount: "₹ 200" },
        { id: 3, amount: "₹ 300" },
        { id: 4, amount: "₹ 500" },
        { id: 5, amount: "₹ 1,000" },
        { id: 6, amount: "₹ 2,000" },
        { id: 7, amount: "₹ 4,000" },
        { id: 8, amount: "₹ 8,000" },
        { id: 9, amount: "₹ 16,000" },
        { id: 10, amount: "₹ 32,000" },
        { id: 11, amount: "₹ 64,000" },
        { id: 12, amount: "₹ 1,25,000" },
        { id: 13, amount: "₹ 2,50,000" },
        { id: 14, amount: "₹ 5,00,000" },
        { id: 15, amount: "₹ 10,00,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
