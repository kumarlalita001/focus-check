import React from 'react'

const UserDiv = ({username,score,rank,color='bg-pink-200',textColor='text-blue-500'}) => {

    const randomNumberGenerator = () => {
        return Math.floor(Math.random() * 40);
    }

    return (
        <div className='max-w-full ml-2 mr-2  mx-auto rounded-md overflow-hidden flex  justify-center  '>
            <div className='min-w-full bg-gray-200 text-black flex box-border justify-between border-box  p-3 items-center'>
                <div className='flex justify-between  items-center gap-8'>

                    <div className={`w-12 h-12 flex items-center justify-center border  border-pink-900 rounded-full`}>
                        <p className={`${textColor} font-bold text-xl`}>{rank}</p>
                    </div>

                    <div className=''>
                        <img className='w-12 border-purple-600 rounded-full ' src={`https://randomuser.me/api/portraits/men/${randomNumberGenerator()}.jpg`} alt="Logo" />
                    </div>
                    <div className=''>
                        <span className='font-sans font-bold'>{username}</span>
                    </div>
                </div>

                <div className={`mr-4 py-1 ${color} px-3 rounded-full`}>
                    <span className='font-bold text-black '>{score}</span>
                </div>


            </div>
        </div>
    )
}

export default UserDiv
