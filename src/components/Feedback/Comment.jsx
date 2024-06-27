import { deleteDoc, doc, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { app } from '../../../firebase';
import { useSelector } from 'react-redux';

const Comment = ({ comment }) => {
  const db = getFirestore(app);
  const {name} = useSelector(store => store.user);

  const deleteFeedback = async (id) => {
    if(name == comment.username || name == "admin0015358")
      await deleteDoc(doc(db, 'Feedbacks', id));
  };

  return (
    <div className="mb-4 ml-2 mr-2 mt-2">
      <div className="bg-slate-200 p-3 rounded-md overflow-hidden">
        <p className="mb-2 font-mono">{comment?.username?.toUpperCase()} </p>
        <p className='p-2 bg-gray-100 rounded-md overflow-hidden flex  justify-between font-mono'>
          {comment.feedback}
          <span onClick={()=> deleteFeedback(comment?.id)} className=' p-2 w-fit text-black bg-slate-200 hover:bg-slate-400 hover:text-white hover:font-bold  flex justify-center items-center '> &#10006; </span>
        </p>
        
      </div>
    </div>
  );
};

export default Comment;
