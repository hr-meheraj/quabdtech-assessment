import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import SingleShow from "./pages/SingleShow";

function App() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/show/:id' element={<SingleShow/>}/>
      </Routes>
    </div>
  );
}

export default App;
