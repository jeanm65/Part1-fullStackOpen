import {useState} from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time',
    'Any fool can write code that a computer can understand. Good programmers write code that ',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write',
    'Programming without an extremely heavy use of console.log is same as if a doctor would ref'
    ]
      const [selected, setSelected] = useState(0);
    
      return (
        <div>
          {anecdotes[selected]} <br />
          <button onClick={()=>setSelected(Math.floor(Math.random() * 7))}>Next anecdote</button>
        </div>
      )
}

export default App
