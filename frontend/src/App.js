import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Authentication from './Components/Authentication/Authentication';
import HomePage from './Components/HomePage/HomePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from './Store/Auth/Action';

function App() {
  const dispatch = useDispatch()
  const { auth } = useSelector(store => store)
  const jwt = localStorage.getItem("jwt")
  const navigate = useNavigate()
  
  useEffect(() => {
    if (jwt) {
      dispatch(getUserProfile(jwt))
      navigate("/")
    }
  }, [auth.jwt, jwt])
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={auth.user ? <HomePage /> : <Authentication />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
