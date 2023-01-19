import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Timer from "./components/timer/Timer";
import Users from "./components/users/Users";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPostsVisible, setPostsVisible] = useState(false);
  const [showTimer, setShowTimer] = useState(false)

  useEffect(() => {
    const resultLogal = localStorage.getItem("AUTH");
    setIsLoggedIn(!!resultLogal);

    return () => {
      localStorage.removeItem("AUTH");
    };
  }, []);

  const loginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("AUTH", JSON.stringify(true));
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("AUTH");
  };
  
  const showTimerHandler = () =>{
    setShowTimer(true)
    setPostsVisible(false)
  }
  const visiblePosts = () => {
    setPostsVisible(true);
    setShowTimer(false)
  };
  const loginedState  = isLoggedIn && !showTimer && !isPostsVisible
  const timerState = isLoggedIn && showTimer
  const postsState = isLoggedIn && isPostsVisible
  return (
    <React.Fragment>
      <MainHeader showTimerHandler={showTimerHandler} visiblePosts={visiblePosts} isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {loginedState && <Users onPosts={visiblePosts}/>}
        {postsState && <Users onPosts={visiblePosts}/>}
        {timerState && <Timer/>}
      </main>
    </React.Fragment>
  );
}

export default App;
