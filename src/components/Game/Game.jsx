import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { decrement, increment } from '../../app/features/UserSlice';
import { nanoid } from '@reduxjs/toolkit';
import LeaderBoardHeader from '../LeaderBoard/LeaderBoardHeader';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from '../../../firebase';

const Game = () => {

    const db = getFirestore(app);
    const dispatch = useDispatch();
    const [hit, setHit] = useState(9);
    const [timer, setTimer] = useState(30);
    const [showScore, setShowScore] = useState(false);
    const [bubbleArr, setBubbleArr] = useState([]);
    const bubbleDiv = useRef();
    
    const { name, value } = useSelector((store) => store.user);

    const bubbleGenerator = () => {
        // setBubbleArr([]);
        let bubble = [];
        for (let j = 0; j < 504; j++) {
            const textColor = randomTextColorGenerator();
            const bgColor = randomBgColorGenerator();
            const randomNumber = randomNumberGenerator();
            bubble.push({ textC: textColor, bgC: bgColor, randomN: randomNumber })
        }
        setBubbleArr(bubble);

        return bubble;
    }
           
    useEffect(()=>{
        bubbleGenerator()
    },[])

    const handleRestart = () => {
        setTimer(30);
        setHit(randomNumberGenerator());
        setShowScore(false);
        dispatch(decrement());
    }
    const handleBubbleClick = async (event) => {
        const clickedValue = Number(event.target.textContent);
        
        if (hit == clickedValue) {
            event.target.style.backgroundColor = 'green';
            setHit(randomNumberGenerator());
            dispatch(increment());
            bubbleGenerator();
        }
    }

    useEffect(() => {
        const time = setInterval(() => {
            if (timer > 0) {

                setTimer(timer - 1);
            } else {
                    if(value == 0)
                        return
                    try {
                        addDoc(collection(db, "Players"), {
                            name: name,
                            score: value,
                        })
                    } catch (err) {
                        alert(err.message);
                    }
                setShowScore(true);
                clearInterval(time);
            }
        }, 1000);
        return () => clearInterval(time);
    }, [timer]);



    const bgColors = [
        'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-200', 'bg-gray-200', 'bg-gray-300', 'bg-gray-300', 'bg-gray-100',
        'bg-red-100', 'bg-red-200', 'bg-red-300', 'bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-500', 'bg-red-300', 'bg-red-100',
        'bg-yellow-100', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400', 'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-700', 'bg-yellow-800', 'bg-yellow-900',
        'bg-green-100', 'bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-green-800', 'bg-green-900',
        'bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900',
        'bg-indigo-100', 'bg-indigo-200', 'bg-indigo-300', 'bg-indigo-400', 'bg-indigo-500', 'bg-indigo-600', 'bg-indigo-700', 'bg-indigo-800', 'bg-indigo-900',
        'bg-purple-100', 'bg-purple-200', 'bg-purple-300', 'bg-purple-400', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700', 'bg-purple-800', 'bg-purple-900',
        'bg-pink-100', 'bg-pink-200', 'bg-pink-300', 'bg-pink-400', 'bg-pink-500', 'bg-pink-600', 'bg-pink-700', 'bg-pink-800', 'bg-pink-900',
        'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900',
        'bg-red-100', 'bg-red-200', 'bg-red-300', 'bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800', 'bg-red-900',
        'bg-yellow-100', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400', 'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-700', 'bg-yellow-800', 'bg-yellow-900',
        'bg-green-100', 'bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-green-800', 'bg-green-900',
        'bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900',
        'bg-indigo-100', 'bg-indigo-200', 'bg-indigo-300', 'bg-indigo-400', 'bg-indigo-500', 'bg-indigo-600', 'bg-indigo-700', 'bg-indigo-800', 'bg-indigo-900',
        'bg-purple-100', 'bg-purple-200', 'bg-purple-300', 'bg-purple-400', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700', 'bg-purple-800', 'bg-purple-900',
        'bg-pink-100', 'bg-pink-200', 'bg-pink-300', 'bg-pink-400', 'bg-pink-500', 'bg-pink-600', 'bg-pink-700', 'bg-pink-800', 'bg-pink-900',

    ];

    const textColors = [
        'text-gray-100', 'text-gray-200', 'text-gray-300', 'text-gray-400', 'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900',
        'text-red-100', 'text-red-200', 'text-red-300', 'text-red-400', 'text-red-500', 'text-red-600', 'text-red-700', 'text-red-800', 'text-red-900',
        'text-yellow-100', 'text-yellow-200', 'text-yellow-300', 'text-yellow-400', 'text-yellow-500', 'text-yellow-600', 'text-yellow-700', 'text-yellow-800', 'text-yellow-900',
        'text-green-100', 'text-green-200', 'text-green-300', 'text-green-400', 'text-green-500', 'text-green-600', 'text-green-700', 'text-green-800', 'text-green-900',
        'text-blue-100', 'text-blue-200', 'text-blue-300', 'text-blue-400', 'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-blue-800', 'text-blue-900',
        'text-indigo-100', 'text-indigo-200', 'text-indigo-300', 'text-indigo-400', 'text-indigo-500', 'text-indigo-600', 'text-indigo-700', 'text-indigo-800', 'text-indigo-900',
        'text-purple-100', 'text-purple-200', 'text-purple-300', 'text-purple-400', 'text-purple-500', 'text-purple-600', 'text-purple-700', 'text-purple-800', 'text-purple-900',
        'text-pink-100', 'text-pink-200', 'text-pink-300', 'text-pink-400', 'text-pink-500', 'text-pink-600', 'text-pink-700', 'text-pink-800', 'text-pink-900',
        'text-gray-100', 'text-gray-200', 'text-gray-300', 'text-gray-400', 'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900',
        'text-red-100', 'text-red-200', 'text-red-300', 'text-red-400', 'text-red-500', 'text-red-600', 'text-red-700', 'text-red-800', 'text-red-900',
        'text-yellow-100', 'text-yellow-200', 'text-yellow-300', 'text-yellow-400', 'text-yellow-500', 'text-yellow-600', 'text-yellow-700', 'text-yellow-800', 'text-yellow-900',
        'text-green-100', 'text-green-200', 'text-green-300', 'text-green-400', 'text-green-500', 'text-green-600', 'text-green-700', 'text-green-800', 'text-green-900',
        'text-blue-100', 'text-blue-200', 'text-blue-300', 'text-blue-400', 'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-blue-800', 'text-blue-900',
        'text-indigo-100', 'text-indigo-200', 'text-indigo-300', 'text-indigo-400', 'text-indigo-500', 'text-indigo-600', 'text-indigo-700', 'text-indigo-800', 'text-indigo-900',
        'text-purple-100', 'text-purple-200', 'text-purple-300', 'text-purple-400', 'text-purple-500', 'text-purple-600', 'text-purple-700', 'text-purple-800', 'text-purple-900',
        'text-pink-100', 'text-pink-200', 'text-pink-300', 'text-pink-400', 'text-pink-500', 'text-pink-600', 'text-pink-700', 'text-pink-800', 'text-pink-900',
    ];

    const fromColors = [
        'from-red-200', 'from-red-300', 'from-red-400', 'from-red-500', 'from-red-600',
        'from-orange-200', 'from-orange-300', 'from-orange-400', 'from-orange-500', 'from-orange-600',
        'from-yellow-200', 'from-yellow-300', 'from-yellow-400', 'from-yellow-500', 'from-yellow-600',
        'from-green-200', 'from-green-300', 'from-green-400', 'from-green-500', 'from-green-600',
        'from-teal-200', 'from-teal-300', 'from-teal-400', 'from-teal-500', 'from-teal-600',
        'from-blue-200', 'from-blue-300', 'from-blue-400', 'from-blue-500', 'from-blue-600',
        'from-indigo-200', 'from-indigo-300', 'from-indigo-400', 'from-indigo-500', 'from-indigo-600',
        'from-purple-200', 'from-purple-300', 'from-purple-400', 'from-purple-500', 'from-purple-600',
        'from-pink-200', 'from-pink-300', 'from-pink-400', 'from-pink-500', 'from-pink-600',
    ];
      const toColors = [
        'to-red-200', 'to-red-300', 'to-red-400', 'to-red-500', 'to-red-600',
        'to-orange-200', 'to-orange-300', 'to-orange-400', 'to-orange-500', 'to-orange-600',
        'to-yellow-200', 'to-yellow-300', 'to-yellow-400', 'to-yellow-500', 'to-yellow-600',
        'to-green-200', 'to-green-300', 'to-green-400', 'to-green-500', 'to-green-600',
        'to-teal-200', 'to-teal-300', 'to-teal-400', 'to-teal-500', 'to-teal-600',
        'to-blue-200', 'to-blue-300', 'to-blue-400', 'to-blue-500', 'to-blue-600',
        'to-indigo-200', 'to-indigo-300', 'to-indigo-400', 'to-indigo-500', 'to-indigo-600',
        'to-purple-200', 'to-purple-300', 'to-purple-400', 'to-purple-500', 'to-purple-600',
        'to-pink-200', 'to-pink-300', 'to-pink-400', 'to-pink-500', 'to-pink-600',
    ];
      

    const randomBgColorGenerator = () => {
        return bgColors[Math.floor(Math.random() * bgColors.length - 1)]
    }

    const randomTextColorGenerator = () => {
        return textColors[Math.floor(Math.random() * textColors.length - 1)]
    }

    const randomNumberGenerator = () => {
        return Math.floor(Math.random() * 10);
    }

 

    return (
        <>
            <div className='h-screen w-screen overflow-x-hidden overflow-y-auto' >
                <LeaderBoardHeader/>

                {!showScore && <div className='max-w-full ml-2 mr-2 md:h-[10%]  h-[50px] mx-auto rounded-md overflow-hidden text-white bg-gray-700 flex justify-center items-center sticky top-0'>
                    <div className='min-w-full'>
                        <ul className='flex justify-between items-center p-[5vw] md:p-[1.5vw] md:justify-around  text-white '>
                            <li className='text-xl font-bold font-mono'>HIT    <span className='bg-white text-black text-xl font-bold rounded-sm px-1 py-0'>{hit}</span> </li>
                            <li className='text-xl font-bold font-mono'>TIMER  <span className='bg-white text-black text-xl font-bold rounded-sm px-1 py-0 '>{timer}</span> </li>
                            <li className='text-xl font-bold font-mono'>SCORE  <span className='bg-white text-black text-xl font-bold rounded-sm px-1 py-0 '>{value}</span> </li>
                        </ul>
                    </div>
                </div>
                }
                <div className='max-w-full ml-2 mr-2 mx-auto rounded-md overflow-hidden mt-1 md:min-h-[90%] min-h-[87%]  bg-slate-900 '>
                    {
                        showScore ?
                            <div className='flex flex-col items-center h-screen justify-center gap-[5%] '>
                                <div className='text-4xl font-bold bg-green-300 p-3 text-black'><button onClick={handleRestart}>Restart</button></div>
                                <div className=' text-4xl font-bold bg-pink-300 text-black p-3'>score : <span className=' bg-green-200 px-2'>{value}</span> </div>
                            </div>
                            :
                            <div className='w-[100%]  min-h-full pl-0 pr-0 pt-2 md:p-[4px]'>
                                <div className='flex justify-center items-center gap-2 flex-wrap overflow-hidden'
                                    onClick={handleBubbleClick}>
                                    {
                                        bubbleArr.map((item) => {
                                            return <div ref={bubbleDiv} key={nanoid()}> 
                                                <div className={`w-10 h-10 flex items-center justify-center bg-gradient-to-br ${fromColors[Math.floor(Math.random() * fromColors.length - 1)]} ${toColors[Math.floor(Math.random() * toColors.length - 1)]} rounded-full ${item.bgC} ${item.textC} `}>
                                                    <p className={`${'text-black-900'} font-bold text-2xl`}>{item.randomN}</p>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>

                            </div>

                    }

                </div>
            </div>

        </>
    )
}

export default Game
