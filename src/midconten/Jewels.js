import React from 'react'
import Adminpro from './Adminpro'

const Jewels = () => {
  return (
    <div>
        <section>
          <Adminpro/>
     <section className='tbb'>
            <button>Add+</button>
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
