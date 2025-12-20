import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./midconten/Home.js";
import Contact from "./midconten/Contact.js";
import Head from "./header/Head";
import Fav from "./midconten/Fav.js";
import Search from "./midconten/Search.js";
import Cart from "./midconten/Cart.js"
import Foot from "./header/Foot.js";
import Admin from "./midconten/Adminn.js";
import Dashboard from "./midconten/Dashboard.js";
import Gold from "./midconten/Gold.js";
import Diamond from "./midconten/Diamond.js";
import Platinum from "./midconten/Platinum.js";
import Silver from "./midconten/Silver.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Product from "./midconten/Product.js";
import "./App.css";



const App = () => {
  return(
    <div>
      <BrowserRouter>
      <Head/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/fav" element={<Fav/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/gold" element={<Gold/>}/>
        <Route path="/admin/diamond" element={<Diamond/>}/>
        <Route path="/admin/platinum" element={<Platinum/>}/>
        <Route path="/admin/silver" element={<Silver/>}/>
      </Routes>
      <Foot/>
      </BrowserRouter>
    </div>
  )
}
export default App
    


















// import Usecallback from "./hooks/Usecallback.js"
// import Useeffect from "./hooks/Useeffect.js"  
// import Usememo from "./hooks/Usememo.js"
// import Usestate from "./hooks/Usestate.js"
// import Lists from "./List.js"
// import Vanathi from "./Main.js"

// function App(){
//   const name="vanathi"
//   return(
//     <div>
//       {/* <Usecallback/>
//        <UseEffect/>
//        <Usememo/> */}
//       {/* <List/> */}
//     </div>
    
//   )
// }
// export default App