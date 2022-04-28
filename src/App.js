import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Loading from "./screens/Loading";
import AboutMe from "./screens/aboutMe/AboutMeScreen";
import Experience from "./screens/experience/Experience";
import MyMenu from "./screens/myMenu/MyMenu";
import { useState,  useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
  setTimeout( () => setLoading(false), 10000);
  }, [])
  
  return (
    
    <>
    {loading === false ? (
      <Router>
      <Routes>
      <Route path='/' element={<HomeScreen/>} />
      <Route
          path='/aboutMe'
          element={<AboutMe />}
        />
      <Route
          path='/experience'
          element={<Experience />}
        />
      <Route
          path='/myMenu'
          element={<MyMenu />}
        />
      </Routes>
    </Router>
    ): <Loading/>}
    </>
  );
}

export default App;
