import React from 'react'
import './adminpro.css'
import { Link } from 'react-router-dom'

const Adminpro = () => {
  return (
    <div>
      <section className='admin'>
     <h4><Link to="/admin">Admin Product Page</Link></h4>
        <div className="admin-product-list">
          <ul>
            <li><Link to="/jewels">Jewels</Link></li>
            <li><Link to="/bangles">Bangles</Link></li>
            <li>Rings</li>
            <li>Necklaces</li>
          </ul>
          </div>
      </section>
    </div>
  )
}
export default Adminpro
