
import React, { useState } from 'react'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const randomLine = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length - 1))); 
    console.log(anecdotes[selected]);
    console.log(anecdotes.length);
    console.log(selected);
  }

  const vote = () =>{
    const votesCopy = [...votes];
    votesCopy[selected]++;
    setVotes(votesCopy);
  }


  return (
    <div>
      <h2>Anectode of the day</h2>
      {anecdotes[selected]}
      <p>Has {votes[selected]} votes</p>
      <p></p>
      <button onClick={randomLine}>Next anecdote</button>
      <button onClick={vote}>Vote for this anecdote</button>
      <h2>Most voted</h2>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
      <p>Has {votes[votes.indexOf(Math.max(...votes))]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export default App;
