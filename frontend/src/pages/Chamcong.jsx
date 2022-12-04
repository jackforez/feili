import React from 'react'
import Cell from '../components/Cell'

const Chamcong = () => {
  const ngay=["T2","T3","T4","T5","T6","T7","CN"]
  return (
    <div className='grid grid-cols-7 gap-1'>
      {ngay.map(i=>{
        return <Cell day={i}/>
      })}
      {Array.from({length:31}).map((i,index)=>{
        return <Cell day={index+1}/>
      })}
    </div>
  )
}

export default Chamcong