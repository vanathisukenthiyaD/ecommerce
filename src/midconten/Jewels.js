import React, { useEffect, useState } from 'react'
import Adminpro from './Adminpro'
import './jewels.css'
import { Link } from 'react-router-dom'

const Jewels = () => {
  const[jewels, setJewels] = useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/getproduct").then((res)=>res.json()).then((data)=>{
      setJewels(data)
    })
  })

  const deleteProduct = (id)=>{
    fetch(`http://localhost:5000/getproduct/${id}`,{
      method:"DELETE"
    }).then((res)=>res.json()).then((data)=>{
      alert("Product deleted successfully")
      setJewels((prevdata)=>prevdata.filter((item)=>item._id !== id))
    })
  }
  return (
    <div>
        <section>
          <Adminpro/>
     <section className='tbb'>
          <Link to="/Addpro">
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
                {jewels.map((item)=>(
                  <tr key={item._id}>
                    <td>{item.title}</td>
                    <td><img src={item.image} alt='' width={100}/></td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><Link to={`/edit/${item._id}`}><button>Edit</button></Link>
                    <button onClick={()=>deleteProduct(item._id)}>Delete</button></td>
                  </tr>
                ))}
                </tbody>       
            </table>
          </section>
        </section>

      
    </div>
  )
}

export default Jewels
