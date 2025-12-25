import React from 'react'
import { Link } from 'react-router-dom'
import './addpro.css'

 const AddPro = () => {
  return (
    <div className="addproduct-wrapper">
      <div className="addproduct-card">
        <h2>Add Product</h2>

        <form>
            <div className="form-group">
            <label>Product ID</label>
            <input type="number" placeholder="Enter product ID" />
          </div>
          <div className="form-group">
            <label>Product Name</label>
            <input type="text" placeholder="Enter product name" />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input type="number" placeholder="Enter price" />
          </div>

          <div className="form-group">
            <label>Stock</label>
            <input type="number" placeholder="Enter stock quantity" />
          </div>

          <button className="submit-btn">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddPro
