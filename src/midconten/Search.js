import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { IoSearchSharp } from "react-icons/io5";
import './search.css'


const Search = () => {
    return (
       <div className='search'>
       <IoSearchSharp  className='searching' />
       <h2 className='search-in'> Search yours favorite ones!...</h2>
       <form className='search-info'>
      {/* <label for="example" class="form-label"></label> */}
      <input type="products" class="search info" id="product" placeholder="search for" IoSearchSharp/>
   

       </form>
       </div>
    );
}

export default Search;
       