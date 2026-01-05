import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import "bootstrap/dist/css/bootstrap.min.css"
import './fav.css'

const Fav = () => {
  return (
   <div className='Fav'>
              <MdFavoriteBorder className='favorite'/>
              <h1>Wishlist</h1>
              <p className='fav-info'>Ohhh....Your wishlist is empty!.. </p>
              </div>
  );
};
export default Fav;
