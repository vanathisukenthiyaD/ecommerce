import React, { use, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './edit.css'

const Edit = () => {
    const {id} = useParams()
    const[editjewel, setEditjewel] = useState({
    title:"",
    price:"",
    image:"",
    description:""
  })

  useEffect(()=>{
    fetch(`http://localhost:5000/getproduct/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      setEditjewel(data)
    })  
  })

  const handleSubmit = (e) =>{
     e.preventDefault();

    const form = e.target
    const title = form.title.value
    const price = form.price.value
    const image = form.image.value
    const description = form.description.value
    const quantity = 1

    if(title==="" || price==="" || image==="" || description===""){
      alert("Please fill all the fields")
      return;
  }

     const product = {
      title,
      price,
      image,
      description,  
     }

     fetch(`http://localhost:5000/getProduct/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(product)
     }).then((res)=>res.json()).then((data)=>{
      alert("Product Updated successfully")
      form.reset()
      window.location.href="/jewels"
     })
  }


    return (
        <div className="editproduct-wrapper">
      <div className="editproduct-card">
        <h2>Edit Product</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label value="title">Product Name</label>
            <input type="text" placeholder="Enter product name" name='title' id='title' defaultValue={editjewel.title}/>
          </div>

          <div className="form-group">
            <label value="price">Price</label>
            <input type="number" placeholder="Enter price" name='price' id='price' defaultValue={editjewel.price}/>
          </div>

          <div className="form-group">
            <label value="image">Image</label>
            <input type="text" placeholder="Enter image URL" name='image' id='image' defaultValue={editjewel.image}/>
          </div>

           <div className="form-group">
            <label value="description">Description</label>
            <input type="text" placeholder="Enter description" name='description' id='description' defaultValue={editjewel.description}/>
          </div>

          <button className="submit-btn">Edit Product</button>
        </form>
      </div>
    </div>
    )
}

export default Edit