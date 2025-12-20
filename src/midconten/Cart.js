import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { CiCircleRemove } from "react-icons/ci";
import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, updateQuantity } from '../redux/Cartslice';

const Cart= () => {
  const cartProduct = useSelector((state)=>state.cart.cartItem)

  const dispatch = useDispatch()

  const deleteCart = (item)=>{
    dispatch(deleteFromCart(item))
  }

  const incrementQuantity = (id, quantity) =>{
    dispatch(updateQuantity({id, quantity : quantity + 1}))
  }

  const decrementQuantity = (id, quantity) =>{
    if(quantity>1){
    dispatch(updateQuantity({id, quantity : quantity - 1}))
    }
  }

  const totalQuantity = cartProduct.reduce((total, item)=> total + item.quantity, 0) 

  const totalAmount = cartProduct.reduce((total, item)=> total + item.quantity * item.price, 0)
  return (
    <>
    <section className='cart'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-9'>
            <table className='table table-borderless text-center'>
              <thead>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </thead>
              <tbody className='text-center'>
                {
                  cartProduct.map((item)=>(
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td><img src={item.img} alt='jewell' width={100}></img></td>
                      <td>${item.price}</td>
                      <td><button className='btn btn-secondary' onClick={()=>incrementQuantity(item.id, item.quantity)}> + </button>
                           {item.quantity}
                          <button className='btn btn-secondary' onClick={()=>decrementQuantity(item.id, item.quantity)}> - </button></td>
                      <td><CiCircleRemove  className='remove' onClick={()=>deleteCart(item)}/></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className='col-lg-3'>
            <div className='card'>
              <h4>Total Quantity: {totalQuantity}</h4>

              <h5>TotalPrice : ${totalAmount}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
              
</>
  );
};
export default Cart;