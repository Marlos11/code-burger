import React from 'react'
import {ButtonOrder} from './styles'


const Btn = ({children,onClick})=>{
    console.log(onClick) 
    return <ButtonOrder onClick={onClick}>{children}</ButtonOrder>
   
}

export default Btn