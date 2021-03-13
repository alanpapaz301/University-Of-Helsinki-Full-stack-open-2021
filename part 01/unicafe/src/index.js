import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Statistics = (props) => {
  return (
    <div>
      <h3 className="stats">
        {props.text} : {props.value}
      </h3>
    </div>
  );
};

const Button = (props) => {
  return (
    <div>
      <button onClick={props.run}>{props.text}</button>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => setGood(good + 1);
  const addNeutral = () => setNeutral(neutral + 1);
  const addBad = () => setBad(bad + 1);

  if (bad + good + neutral <= 0) {
    return (
      <div className="mainContainer">
        <h1>Give feedback</h1>
        <div id="buttonContainer">
          <Button run={addGood} text="good" />
          <Button run={addNeutral} text="neutral" />
          <Button run={addBad} text="bad" />
        </div>
      </div>
    );
  }
  return (
    <div className="mainContainer">
      <h1>Give feedback</h1>
      <div id="buttonContainer">
        <Button run={addGood} text="good" />
        <Button run={addNeutral} text="neutral" />
        <Button run={addBad} text="bad" />
      </div>
      <table>
        <tbody>
          <tr id="statsTable">
            <td>
              <Statistics text="Good" value={good} />
            </td>
            <td>
              <Statistics text="Neutral" value={neutral} />
            </td>
            <td>
              <Statistics text="Bad" value={bad} />
            </td>
            <td>
              <Statistics text="Total" value={bad + good + neutral} />
            </td>
            <td>
              <Statistics
                text="Average"
                value={((bad * -1 + good * 1 + neutral * 0) / 3).toFixed(2)}
              />
            </td>
            <td>
              <Statistics
                text="Positive"
                value={((good / (bad + good + neutral)) * 100).toFixed(2) + "%"}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
