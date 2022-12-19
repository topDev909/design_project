import React, { useState } from 'react';

const TableHeaderItem = ({ requestSort, keyName, name, clsName }) => {
    const [direction, setDirection] = useState("descending");
    return (
        <th onClick={() => requestSort(keyName)} className={clsName}>
            <div>
                <span>
                    {name}
                </span>
                {
                    direction === "ascending" ?
                        <button className='btn' onClick={() => setDirection("descending")}>↑</button>
                        :
                        <button className='btn' onClick={() => setDirection("ascending")}>↓</button>
                }
            </div>
        </th>
    )
}

export default TableHeaderItem