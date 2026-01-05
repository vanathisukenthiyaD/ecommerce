import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./midconten/Home.js";
import Contact from "./midconten/Contact.js";
import Head from "./header/Head";
import Fav from "./midconten/Fav.js";
import Search from "./midconten/Search.js";
import Cart from "./midconten/Cart.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Product from "./midconten/Product.js";
import AdminPro from "./midconten/Adminpro.js";
import "./App.css";
import Jewels from "./midconten/Jewels.js";
import Bangles from "./midconten/Bangles.js";
import Addpro from "./midconten/Addpro.js"; 
import Edit from "./midconten/Edit.js";
import Foot from "./header/Foot.js";
import Banglefor from "./midconten/Banglefor.js";



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
        <Route path="/admin" element={<AdminPro/>}/>
        <Route path="/jewels" element={<Jewels/>}/>
        <Route path="/bangles" element={<Bangles/>}/>
        <Route path="/Addpro" element={<Addpro/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/banglefor" element={<Banglefor/>}/>
        <Route path="/edit/:id" element={<Edit/>}  loader={(params)=>fetch(`http://localhost:5000/getproduct/${params.id}`)}/>
      </Routes>
      {/* <Foot/> */}
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