import React, { useEffect, useState } from 'react'
import './product.css'
import j1 from '../images/bangle.jpg'
import j2 from  '../images/chain.jpg'
import j3 from  '../images/earring.jpg'
import j4 from  '../images/neck.jpg'
import j5 from  '../images/brace.jpg'
import j6 from  '../images/ring.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/Cartslice'



const Product = () => {

    const collection = [
        {
            id:1,
            title:"Bangels",
            img:j1,
            des:"Quintessential Emerald Ruby Bangle",
            price:287346,
            quantity:1
        },
        {
            id:2,
            title:"Chain",
            img:j2,
            des:"Quintessential Emerald classic",
            price:300000,
            quantity:1
        },
        {
            id:3,
            title:"Earring",
            img:j3,
            des:"stunning earrings",
            price:98000,
            quantity:1
        },
        {
            id:4,
            title:"Short Necklace",
            img:j4,
            des:"wedding neclace",
            price:287346,
            quantity:1
        },
        {
            id:5,
            title:"Braclet",
            img:j5,
            des:"Quintessential Emerald Ruby Bracelet",
            price:250000,
            quantity:1
        },
        
        {
            id:6,
            title:"Ring",
            img:j6,
            des:"you & me ring",
            price:95000,
            quantity:1
        },

    ]

    const cartProduct = useSelector((state)=>state.cart.cartItem)

    const dispatch = useDispatch()

    const addCart = (item) =>{
        dispatch(addToCart(item))
    }

    const[jewelData, setJewelData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/getproduct').then((res)=>res.json()).then((data)=>{
            if(Array.isArray(data))
            setJewelData(data)
        })
    })
  return (
    <div>
      <section className='banner'>
        <h1>Our Collection</h1>
      </section>
    <section>
        <div className='container'>
            {
                jewelData.map((item)=>(
                    <div key={item._id}>
                        <img src={item.image} alt=''/>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <h3>${item.price}</h3>
                        {
                            cartProduct.find((items)=>items.id===item.id) ?
                            <button>Added to cart</button> :
                            <button onClick={()=>addCart(item)}>add to cart</button>
                        }
                    </div>
                ))
            }
        </div>
      </section>
      
    </div>
  )
}

export default Product
