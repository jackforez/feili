import React from 'react'

const Cell = (props) => {
  return (
    <div className='px-4 py-8 rounded bg-indigo-600 flex justify-center items-center hover:bg-white hover:text-indigo-600 cursor-pointer font-bold'>{props.day}</div>
  )
}

export default Cell