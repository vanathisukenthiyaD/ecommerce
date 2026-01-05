import React from 'react'
import { Link } from 'react-router-dom'
import './addpro.css'
import { toast } from 'react-toastify';

 const AddPro = () => {

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

     fetch("http://localhost:5000/uploadproduct",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(product)
     }).then((res)=>res.json()).then((data)=>{
      alert("Product added successfully")
      form.reset()
      window.location.href="/jewels"
     })
}


  return (
    <div className="addproduct-wrapper">
      <div className="addproduct-card">
        <h2>Add Product</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Product Name</label>
            <input type="text" placeholder="Enter product name" name='title' id='title'/>
          </div>

          <div className="form-group">
            <label>Price</label>
            <input type="number" placeholder="Enter price" name='price' id='price'/>
          </div>

          <div className="form-group">
            <label>Image</label>
            <input type="text" placeholder="Enter image URL" name='image' id='image'/>
          </div>

           <div className="form-group">
            <label>Description</label>
            <input type="text" placeholder="Enter description" name='description' id='description'/>
          </div>

          <button className="submit-btn">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddPro
