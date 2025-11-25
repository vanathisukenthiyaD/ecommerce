import React from 'react'

const Lists = () => {
     const product = [
        {
            id:1,
            title:"mobile",
            price:10000,
            img:"https://m.media-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg"
        },
        {
            id:2,
            title:"laptop",
            price:50000,
            img:"https://m.media-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg"
        },
        {
            id:3,
            title:"watch",
            price:2000,
            img:"https://m.media-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg"
        },
        {
            id:4,
            title:"headphone",
            price:3000,
            img:"https://m.media-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg"
        },
        {
            id:5,
            title:"camera",
            price:40000,
            img:"https://m.media-amazon.com/images/I/81OaXwn1x4L._SL1500_.jpg"  
        }
    ]
  return (
    <div>
      {product.map((bag)=>(
        <div key={bag.id}>
            <h1>{bag.title}</h1>
            <h2>${bag.price}</h2>
            <img src={bag.img} alt="" width={100}/>
            <hr/>
            </div>

      ))}
    </div>
  )
}

export default Lists
