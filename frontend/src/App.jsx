import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { useThemeStore } from './store/useThemeStore';
import {Toaster} from "react-hot-toast"

export default function App() {
  const {theme} = useThemeStore();
  return (
    <div data-theme={theme}>

      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}
