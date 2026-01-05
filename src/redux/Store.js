import { configureStore } from "@reduxjs/toolkit";
import Cartslice from '../redux/Cartslice'


const Store = configureStore({
    reducer:{
        cart:Cartslice
    },
    devTools:true
})
export default Store