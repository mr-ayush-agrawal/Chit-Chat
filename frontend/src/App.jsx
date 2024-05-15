import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/auth.context'

function App() {
  const { authuser } = useAuthContext();


  return (
    <div className='p-4 h-screen flex items-center justify-center'>

      <Routes>
        <Route path='/' element={authuser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authuser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authuser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
