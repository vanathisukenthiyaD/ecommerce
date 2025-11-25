import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import './head.css'

const Head = () => {
  return (
    <div>
      navbar
      <ol>
        <li><Link to="/"><FaHome className='ii'/>Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ol>

      <FaHome />
    </div>
  )
}

export default Head
