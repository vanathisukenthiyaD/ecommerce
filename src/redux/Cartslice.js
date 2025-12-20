import {createSlice} from '@reduxjs/toolkit'

const storedItem = localStorage.getItem("cartItem")


const initialState = {
    cartItem : storedItem ? JSON.parse(storedItem)  : []
}

const Cartslice = createSlice({
    name:"cart",

    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload
            const existItem = state.cartItem.find((items)=>items.id===newItem.id)
            if(existItem){
                existItem.quantity += newItem.quantity
            }
            state.cartItem.push({
                id:newItem.id,
                title:newItem.title,
                img:newItem.img,                                                                                                                                               
                price:newItem.price,
                quantity:1
            })

            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },
        deleteFromCart:(state,action)=>{
            state.cartItem = state.cartItem.filter((items)=>items.id !== action.payload.id)
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },
        updateQuantity:(state,action)=>{
            const{id,quantity} = action.payload
            const itemToUpdate = state.cartItem.find((items)=>items.id === id)

            if(itemToUpdate){
                itemToUpdate.quantity = quantity
            }
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        }
    }
})

export default Cartslice.reducer



export const {addToCart, deleteFromCart,updateQuantity} = Cartslice.actions

//react - ui library frontend , state - setstate
//redux - state management library, state - immutable
//core concepts
//action - plain function, reducer - function(state,action) and store
//action - type(property)
//useDispatch
//reducer
//store
//createslice - action, reducer

//npm i redux react-redux @reduxjs/toolkit 
 
