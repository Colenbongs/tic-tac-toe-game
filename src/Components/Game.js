import React from 'react';
import { calculateWinner } from '../helpers';
import Board1 from './Board';
import { useState } from 'react';

const styles = {
  width: '201px',
  margin: '30px auto',
  color: 'blue',
  text: 'left'
};

const Game = () => {
  const [previous, setHistory] = useState([Array(9).fill(null)]);
  const [game1, setGame1] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner([game1]);

  const handleClick = i => {
    const timeInHistory = previous.slice(0, game1 + 1);
    const current = timeInHistory[game1];
    const squares = [...current];
    // If user click an occupied square or if game is won, return
    if (winner || squares[i]) return;
    // Put an X or an O in the clicked square
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setGame1(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = first => {
    setGame1(first);
    setXisNext(first % 2 === 0);
  };

  const renderMoves = () =>
  previous.map((_step, moves) => {
      const destination = moves ? `Previous moves- ${moves}` : 'Restart game' ;
      return (
        <li key={moves}>
          <button   onClick={() => jumpTo(moves)}>{destination}</button>
        </li>
      );
    });

  return (
  
<>
    <Board1 squares={previous[game1]} onClick={handleClick} />

      <div style={styles}>
        
        {winner ? ' You are the Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
        
    
        
      </div>
      {renderMoves()}
    </>
     
  );
};

export default Game;
