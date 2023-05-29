import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './routes/Home'
import HomeBody from './routes/Home/HomeBody'
import Products from './routes/Home/Products'
import About from './routes/Home/About'
import NotFound from './routes/Home/NotFound'
import Computers from './routes/Home/Products/Computers'
import Electronics from './routes/Home/Products/Electronics'
import Books from './routes/Home/Products/Books'

export default function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="products/" element={<Products />}>
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


