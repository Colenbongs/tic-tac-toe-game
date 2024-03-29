import Square from "./Square";

const style ={
    border: 'groove blue 10px',
   
    borderRadius: '11px',
    width: '150px',
    height: '150px',
    margin:'0 auto',
    display: 'grid',
    padding: '10px',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}


const Board1 = ({ squares, onClick }) => (
	<div style={style}>
		
        {squares.map((square, i) => (
			<Square key={i} value={square} onClick={() => onClick(i)} />
		))}

	</div>
);

export default Board1;