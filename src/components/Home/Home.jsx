import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addName, decrement } from '../../app/features/UserSlice';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMsg("Please Enter Your Name");
      return;
    }
    dispatch(decrement());
    setErrorMsg('');
    dispatch(addName(name));
    navigate('/game');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800">
      <div className="bg-white p-8 rounded-md mb-8 shadow-md  md:w-full w-[90%] max-w-md">
        <h2 className="text-3xl text-center font-bold mb-4 text-gray-700">Enter Your Name</h2>
        <div className="mb-6">
          <input
            type="text"
            className="w-full p-3 border-2 border-gray-300 focus:outline-none focus:border-gray-500 rounded-md"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value.replace(/\s/g, ''))}
          />
        </div>
        {errorMsg && <p className='text-red-600 text-center mb-1 font-serif font-bold'>{errorMsg}</p>}
        <button
          type="submit"
          className="w-full bg-gray-400 text-black hover:text-white p-3 rounded-md hover:bg-gray-600 transition-all duration-300"
          onClick={handleSubmit}
        >
          Start Game
        </button>
      </div>


      <div className="bg-white p-5 rounded-md shadow-md md:w-full w-[90%] max-w-md flex justify-center items-center flex-col">
        <h2 className="md:text-3xl text-2xl font-bold mb-4 text-gray-700">Read Instructions Carefully </h2>
        <div className="text-gray-900 text-xl font-mono">
          Welcome to the game! 
            <p>Time : 30 Seconds</p>
            <p>1 Right Hit : +10 Points</p>
            <p>1 Wrong Hit : -5 Points</p>
          <p className='text-red-500 font-bold md:text-2xl text-xl mt-2 font-mono'>Tip : Don't Focus on Timer</p>
        </div>
      </div>

    </div>
  );
};

export default Home;
