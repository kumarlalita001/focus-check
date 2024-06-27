import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { app } from '../../../firebase';

const CommentForm = () => {
  const db = getFirestore(app);
  const [comment, setComment] = useState('');
  const { name } = useSelector(store => store.user);

  const handlePost = async () => {
    if(!comment) 
        return
    try {
      addDoc(collection(db, "Feedbacks"), {
          username: name,
          feedback :  comment,
      })
    } catch (err) {
      alert(err.message);
    }
    setComment('')
  };

  return (
    <div className="max-w-md mx-auto mt-4 ">
      <div className="flex m-2 mb-5 bg-slate-300 ">
        <input
          type="text"
          placeholder="Add your feedback..."
          className="flex-1 p-2 border border-gray-600  rounded-l"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={handlePost}
          className="bg-gray-500 hover:bg-gray-600 hover:font-bold  text-black hover:text-white pl-5 p-2 rounded-r"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
