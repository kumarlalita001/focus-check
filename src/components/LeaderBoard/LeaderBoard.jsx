import React, { useEffect } from 'react'
import UserDiv from './UserDiv.jsx'
import ThreeUser from './ThreeUser.jsx'
import LeaderBoardHeader from './LeaderBoardHeader.jsx'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../app/features/UserSlice.js'
import { app } from '../../../firebase.js'
import { collection, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore'
import LoadingSpinner from '../Shimmer/Shimmer.jsx'


const LeaderBoard = () => {
  const db = getFirestore(app);
  const q = query(collection(db, "Players"), orderBy("score", "desc"));
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.user);

  
  useEffect(() => {
    const unsubsribe = onSnapshot(q, (snap) => {
      dispatch(addUser(snap?.docs?.map((item) => {
        return { ...item.data() };
      })));
    });
    return () => unsubsribe();
  }, [])

  const textColors = [
    'text-gray-400', 'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900',
    , 'text-red-500', 'text-red-600', 'text-red-700', 'text-red-800', 'text-red-900',
    , 'text-yellow-400', 'text-yellow-500', 'text-yellow-600', 'text-yellow-700', 'text-yellow-800', 'text-yellow-900',
    'text-green-400', 'text-green-500', 'text-green-600', 'text-green-700', 'text-green-800', 'text-green-900',
    'text-blue-400', 'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-blue-800', 'text-blue-900',
    'text-indigo-400', 'text-indigo-500', 'text-indigo-600', 'text-indigo-700', 'text-indigo-800', 'text-indigo-900',
    'text-purple-400', 'text-purple-500', 'text-purple-600', 'text-purple-700', 'text-purple-800', 'text-purple-900',
    'text-pink-400', 'text-pink-500', 'text-pink-600', 'text-pink-700', 'text-pink-800', 'text-pink-900',
    'text-gray-400', 'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900',
    'text-red-500', 'text-red-600', 'text-red-700', 'text-red-800', 'text-red-900',
    'text-yellow-400', 'text-yellow-500', 'text-yellow-600', 'text-yellow-700', 'text-yellow-800', 'text-yellow-900',
    'text-green-400', 'text-green-500', 'text-green-600', 'text-green-700', 'text-green-800', 'text-green-900',
    'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-blue-800', 'text-blue-900',
    'text-indigo-400', 'text-indigo-500', 'text-indigo-600', 'text-indigo-700', 'text-indigo-800', 'text-indigo-900',
    'text-purple-400', 'text-purple-500', 'text-purple-600', 'text-purple-700', 'text-purple-800', 'text-purple-900',
    'text-pink-300', 'text-pink-400', 'text-pink-500', 'text-pink-600', 'text-pink-700', 'text-pink-800', 'text-pink-900',
  ];

  const bgColors = [
    'bg-gray-300', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500',
    'bg-red-200', 'bg-red-200', 'bg-red-300', 'bg-red-400', 'bg-red-500',
    'bg-yellow-200', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400', 'bg-yellow-500',
    'bg-green-200', 'bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500',
    'bg-blue-200', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500',
    'bg-indigo-200', 'bg-indigo-200', 'bg-indigo-300', 'bg-indigo-400',
    'bg-purple-200', 'bg-purple-200', 'bg-purple-300', 'bg-purple-400', 'bg-purple-500',
    'bg-pink-200', 'bg-pink-200', 'bg-pink-300', 'bg-pink-400',
    'bg-gray-200', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400',
    'bg-red-200', 'bg-red-200', 'bg-red-300', 'bg-red-400',
    'bg-yellow-200', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400',
    'bg-green-200', 'bg-green-200', 'bg-green-300', 'bg-green-400',
    'bg-blue-200', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500'
    , 'bg-indigo-200', 'bg-indigo-200', 'bg-indigo-300', 'bg-indigo-400', 'bg-indigo-500',
    'bg-purple-200', 'bg-purple-200', 'bg-purple-300', 'bg-purple-400', 'bg-purple-500',
    'bg-pink-200', 'bg-pink-200', 'bg-pink-300', 'bg-pink-400',

  ];

  const randomBgColorGenerator = () => {
    return bgColors[Math.floor(Math.random() * bgColors.length - 1)]
  }

  const randomTextColorGenerator = () => {
    return textColors[Math.floor(Math.random() * textColors.length - 1)]
  }
  return (
    <>
      {
        users.length == 0 ? <LoadingSpinner /> :

          <div className='scroll-smooth'>
            <LeaderBoardHeader />
            <div className='flex flex-col gap-2 min-w-full '>
              <ThreeUser textColor1={randomTextColorGenerator()} textColor2={randomTextColorGenerator()} textColor3={randomTextColorGenerator()} />
              {
                users?.slice(3)?.map((user, index) => {
                  return <UserDiv key={nanoid()} username={user.name} score={user.score} rank={index + 4} color={randomBgColorGenerator()} textColor={randomTextColorGenerator()} />
                })
              }

            </div>
          </div>
      }

    </>


  )
}

export default LeaderBoard
