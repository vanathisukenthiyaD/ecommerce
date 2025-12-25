import React from 'react'
import Adminpro from './Adminpro'
import './jewels.css'
import { Link } from 'react-router-dom'

const Jewels = () => {
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
                  <th>Product ID</th> 
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                </tr>
              </thead>
              
            </table>
          </section>
        </section>

      
    </div>
  )
}

export default Jewels
