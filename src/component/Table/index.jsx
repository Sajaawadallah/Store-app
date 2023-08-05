import React from 'react';
import './style.css';

const Table = ({ data, columns, isloading, onrowclicked = () => { } }) => {
    return (
        <table>
            <thead >
                <tr>
                    {columns.map(column => (<th key={column.key}>{column.title}</th>))}
                </tr>
            </thead>
            <tbody>
                {!isloading && data.map(row => (<tr key={row.id} onClick={() => onrowclicked(row)}>{columns.map(column =>
                    (<td key={`${row.id + column.key}}`}>{column.render ? column.render(row) : row[column.key]}</td>)
                )}</tr>))}

                {isloading && <tr><td colSpan={columns.length}>Loading...</td></tr>}


            </tbody>
        </table>
    );



}


export default Table