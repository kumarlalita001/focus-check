import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { decrement } from '../../app/features/UserSlice';


const LeaderBoardHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className='max-w-full ml-2 mr-2 mx-auto mb-1 mt-1  bg-blue-300 rounded-md overflow-hidden  sticky top-1 h-[50px] flex justify-between items-center'>
      <div className='w-[15%] flex text-center'>
        <NavLink to={'/'}>
          <span className='md:text-4xl text-2xl font-bold mx-auto  '>🏠</span>
        </NavLink>
        <NavLink to={'/game'}>
          <span onClick={()=> dispatch(decrement())} className='md:text-4xl text-2xl font-bold mx-auto ml-4 mb-3 '>🎮</span>
        </NavLink>
      </div>
      <NavLink to={'/leader-board'}>
        <h1 className='font-bold md:text-3xl text-2xl  mx-auto font-sans'>
          LEADERBOARD
        </h1>

      </NavLink>
      <NavLink to={'/feedback'}>
        <span className='font-bold md:text-4xl text-2xl mb-7 mr-5 '>⁉️</span>
      </NavLink>

    </div>
  )
}

export default LeaderBoardHeader
