import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Head from './header/Head'
import Footer from './header/Footer'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Head/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App



// import Usecallback from "./hooks/Usecallback.js"
// import Useeffect from "./hooks/Useeffect.js"  
// import Usememo from "./hooks/Usememo.js"
// import Usestate from "./hooks/Usestate.js"
// import Lists from "./Lists.js"
// import Vanathi from "./Main.js"

// function App(){
//   const name="vanathi"
//   return(
//     <div>
      /* <h1 style={{color:"red", backgroundColor:"yellow"}}>hello</h1>
      <p style={{color:"rebeccapurple"}}>hello hai {name}</p>
      <Vanathi name1="javascript"/>
      <Usestate/>
      <Useeffect/>
      <div></div> */
      /* <Usecallback/> */
      /* <UseEffect/> */
      /* <Usememo/> */
      /* <Lists/> */
    /* </div>
    
  )
}
export default App */

//component - component

//jsx - javascript xml
//single page application- SPA
//html - jsx
//inline css - style={{}}
//camelcase - backgroundColor
//class - className 




