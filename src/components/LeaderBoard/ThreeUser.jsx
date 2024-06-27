import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

//https://randomuser.me/api/portraits/women/45.jpg
// https://randomuser.me/api/portraits/men/18.jpg
//https://randomuser.me/api/portraits/lego/1.jpg

const ThreeUser = ({ textColor1 = 'text-blue-500', textColor2 = 'text-black-600', textColor3 = "text-blue-700" }) => {
    const randomNumberGenerator = () => {
        return Math.floor(Math.random() * 39);
    }
   
    const {users} = useSelector(store => store.user);
    const user1 = users[0];
    const user2 = users[1];
    const user3 = users[2];



    return (
        <div className=' ml-2 mr-2 flex justify-center items-center sticky top-[58px] '>
            <div className='min-w-full ml-2 mr-2 bg-gray-200  flex justify-center items-center gap-2  md:gap-14 ' >
                <div className='w-[20%] md:w-[8%]  m-2 p-5   flex flex-col items-center gap-2 ' >
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-green-200 to-blue-500 rounded-full">
                        <p className={`${'text-black'} font-bold text-2xl`}>2</p>
                    </div>
                    <img className='rounded-full ' src={`https://randomuser.me/api/portraits/women/${randomNumberGenerator()}.jpg`} alt="Logo" />
                    <span className={`${textColor1} font-bold text-xl font-sans`}>{user2?.score}</span>
                    <span className={`${textColor2} font-sans font-extrabold`}>{user2?.name}</span>

                </div>
                <div className='w-[30%] md:w-[10%] m-2 p-5 bg-slate-200 flex flex-col items-center gap-1 ' >

                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-pink-500 to-blue-600 rounded-full ">
                        <p className={`${'text-black-900'} font-bold text-2xl`}>1</p>
                    </div>

                    <span className='text-5xl'>👑</span>
                    <img className='rounded-full ' src={`https://randomuser.me/api/portraits/men/${randomNumberGenerator()}.jpg`} alt="Logo" />
                    <span className={`${textColor3} font-bold text-xl font-sans`}>{user1?.score}</span>
                    <h3 className={`${textColor1} font-sans font-extrabold`}>{user1?.name}</h3>

                </div>
                <div className='w-[20%] md:w-[8%] m-2 p-5 bg-slate-200 flex flex-col items-center gap-2' >
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-pink-200 to-orange-500 rounded-full">
                        <p className={`${'text-black'} font-bold text-2xl`}>3</p>
                    </div>
                    <img className='rounded-full' src={`https://randomuser.me/api/portraits/women/${randomNumberGenerator()}.jpg`} alt="Logo" />
                    <span className={`${textColor2} font-bold text-xl font-sans`}>{user3?.score}</span>
                    <h3 className={`${textColor3} font-sans font-extrabold`}>{user3?.name}</h3>
                </div>

            </div>
        </div>
    )

}

export default ThreeUser
