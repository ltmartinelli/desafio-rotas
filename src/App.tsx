import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './routes/Home'
import HomeBody from './routes/Home/HomeBody'
import Products from './routes/Home/Products'
import About from './routes/Home/About'

export default function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="products/" element={<Products/>} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


