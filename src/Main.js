// import React,{Component} from "react";

// class Vanathi extends Component{
//     constructor(props, bags){
//         super()
//         this.count={
//             name:"vanathi"
//         }
//     }
//     render(){
//         return(
//             <>
//             <p>{this.count.name}</p>
//             <h1>Class component</h1>
//             </>
//         )
//     }

// }

// export default Vanathi

import React from 'react'

const Vanathi = (props) => {
  return (
    <div>
        <h1>Functional component</h1>
        <p>{props.name1}</p>
    </div>
  )
}

export default Vanathi
