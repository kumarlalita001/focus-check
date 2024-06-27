import React, { useEffect } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import LeaderBoardHeader from '../LeaderBoard/LeaderBoardHeader'
import { useDispatch, useSelector } from 'react-redux';
import { collection, getFirestore, onSnapshot, query } from 'firebase/firestore';
import { app } from '../../../firebase';
import { addFeedback } from '../../app/features/UserSlice';


const Feedback = () => {
    const {feedbacks} = useSelector(store => store.user);
    const db = getFirestore(app);
    const dispatch = useDispatch();
    const q = query(collection(db, "Feedbacks"));

    useEffect(() => {
        const unsubsribe = onSnapshot(q, (snap) => {
          dispatch(addFeedback(snap?.docs?.map((item) => {
            const id = item.id;
            return { id, ...item.data() };
          })));
        });
        return () => unsubsribe();
      }, [])


    return (
        <div className="md:max-w-full max-w-lg mx-auto">
            <LeaderBoardHeader />
            <div className='md:max-w-full max-w-lg  p-3 ml-2 mr-2  rounded-md overflow-hidden bg-slate-300 sticky top-[58px]'>
                <h1 className="text-2xl ml-2 font-bold mb-4 font-mono md:ml-[399px] ">Add your feedback</h1>
                <CommentForm />
            </div>
            {feedbacks?.map((comment, index) => (
                <Comment key={index} comment={comment} />
            ))}
        </div>
    );
};

export default Feedback;
