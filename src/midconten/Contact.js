import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { IoMdContact } from "react-icons/io";
import './contact.css'

const Contact = () => {

    const[formdata, setFormdata] = useState({
        username:"",
        email:"",
        password:""
    })

    const[error, setError] = useState({})

    const validate = () =>{
        const newError = {}

        if(!formdata.username) newError.username = "enter username"

        if(!formdata.email) newError.email = "enter email"

        else if(!/\S+@\S+\.\S+/.test(formdata.email)) newError.email = "invalid email format"

        //  / \S  /

        if(!formdata.password) newError.password = "enter password"

        else if(formdata.password.length < 6 ) newError.password = "password should contain 6 char"

        else if(!/[A-Z]/.test(formdata.password)) newError.password = "password should contain 1 uppercase"

        return newError

    }


    const handleChange = (event) =>{
        const{name, value} = event.target

        setFormdata({
            ...formdata, //spread operater

            [name] : value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault() 

        const validation = validate()

        if(Object.keys(validation).length === 0){
            console.log(formdata)


            setFormdata({
                username:"",
                email:"",
                password:""
            })
            setError({})
        }else{
            setError(validation)
        }
    }


    return (
        <div className='contact'>
            <IoMdContact className='contact-icon' />
           <h2>Contact Us</h2>
           <p className='contact-info'>If you have any questions, feel free to reach out!</p>

        <div className='contact-details'>
            <strong><p>Email: Dazzlingjewells@gmail.com</p>
            <p>Phone: 9876547890</p>
            <p>Address: 123 Jewelry St, Gem City, Coimbatore</p></strong>
        </div>

        <form className= 'contact-info' onSubmit={handleSubmit}>
            <input type='text' placeholder='Your name' name="username" value={formdata.username} onChange={handleChange}/>
            {error.username && <p style={{color:"red"}}>{error.username}</p>}

            <input type='text' placeholder='@email' name="email" value={formdata.email} onChange={handleChange}/>
             {error.email && <p style={{color:"red"}}>{error.email}</p>}

            <input type='text' placeholder='Password' name="password" value={formdata.password} onChange={handleChange}/>
             {error.password && <p style={{color:"red"}}>{error.password}</p>}
            <textarea placeholder='your message' row='4'></textarea>
            <button type='submit'>send message</button>
        </form>
       </div>
    );
}

export default Contact;
       