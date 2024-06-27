import React, { useEffect } from 'react'
import Feedback from './components/Feedback/Feedback';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Game from './components/Game/Game';


const App = () => {

  //   document.addEventListener('contextmenu', function (e) {
  //     e.preventDefault();
  // });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Outlet/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "leader-board",
          element: < LeaderBoard />
        },
        {
          path: 'game',
          element: <Game/>
        },
        {
          path: 'feedback',
          element: <Feedback />
        }
      ]
    }
  ])


  // const dispatch = useDispatch();
  // const user = useSelector((store)=>store.user.users)
  // console.log(user);

  // useEffect(()=>{ 
  //    dispatch(addUser({name : "Lalit" , age : 19}))
  // },[])



  return (
    <>
      <RouterProvider router={router}>
        <App/>
      </RouterProvider>
    </>
  )
}

export default App
