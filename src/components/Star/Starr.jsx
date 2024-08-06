import React from 'react'

export default function Star({color, star}) {
  return (
    <div className='flex mt-4 mb-4'>
        <span className="star2"></span>
        <i className="fa-solid fa-star star self-center text-cyan-950"></i>
        <span className="star2"></span>
        </div>
  )
}