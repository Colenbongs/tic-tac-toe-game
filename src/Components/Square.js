import React from "react";

const style = {
        background: 'red',
        border: '3px solid blue',
        fontSize: '25px',
        fontWeight: '600',
        cursor: 'pointer',
        outline: 'none',
        padding: '5px',
        color:  'gold'
}

const Square = ({value, onClick}) => (

    <button style ={style} onClick={onClick}>
        {value}
    </button>
)

export default Square;