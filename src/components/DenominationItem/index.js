// Write your code here

import React from 'react'

const DenominationItem = (props) => {
    const { denominationsList, deposiMoney } = props
    const { id, value } = denominationsList

    const addValue = () => {
        deposiMoney(value)
    }

    return (
        <button value={value} onClick={addValue} className={`${id} bg-indigo-400 hover:bg-indigo-500 border-2 text-white font-medium border-gray-300 px-12 py-1.5 m-2 rounded`}>{value}</button>
    )
}

export default DenominationItem
