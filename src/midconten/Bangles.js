import React from 'react'
import Adminpro from './Adminpro'  
import './jewels.css' 
import { Link } from 'react-router-dom'
 

const Bangles = () => {
  const [bangles,setBangles]=React.useState([]);

  React.useEffect(()=>{ 
    fetch("http://localhost:5000/getbangle").then((res)=>res.json()).then((data)=>{
      setBangles(data)
    })
  })

  const deleteProduct = (id)=>{
    fetch(`http://localhost:5000/getbangle/${id}`,{
      method:"DELETE" 
    }).then((res)=>res.json()).then((data)=>{
      alert("Product deleted successfully")
      setBangles((prevdata)=>prevdata.filter((item)=>item._id !== id))
    })
  }

  return (
   <>
   <section>
    <Adminpro/>
    <section className='tbb'>

         <Link to="/bangleform">
            <button>Add+</button>
          </Link>

            <table className='table'>
              <thead>
                <tr>
                  <th>Product Name</th> 
                  <th>Product Image</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
               </thead>
               <tbody>
                { bangles.map((item)=>(
                    <tr key={item._id}>
                      <td>{item.title}</td>
                      <td><img src={item.image} alt='' width={100}/></td>
                      <td>{item.price}</td>
                      <td>{item.description}</td>
                      <td><button>Edit</button>
                      <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                }
               </tbody>
              
            </table>
          </section>
   </section>
   </>
  )
}

export default Bangles
