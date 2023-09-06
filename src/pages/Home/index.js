import React, { useState, useRef,useEffect} from 'react'
import axios from 'axios'
import { Container, ImgBurger, InputLabel, Input, ConteinerItens, CardOrder } from './styles'
import H1 from '../../components/Title'
import ButtonOrder from '../../components/Title/Button'
import Burger from '../../assets/burger 1.svg'
import Trash from '../../assets/Trash.svg'

function Order() {

    const [orders, setOrders] = useState([])
    const inputOrder = useRef()
    const inputClint = useRef()


  async  function addOrder() {
        
        const {data:newOrder} = await axios.post('http://localhost:3001/order',
        {order:inputOrder.current.value,
        clienteName:inputClint.current.value})
        
        
        
         setOrders([...orders,newOrder]) 
           
} 

    useEffect(()=>{
        const fetchOrder = async () =>{
            const {data : newOrders} = await axios.get('http://localhost:3001/order')
            
            setOrders(newOrders)
        }
        fetchOrder()
    },[])

        
    const deleteOrder = async (userId)=>{
        await axios.delete(`http://localhost:3001/order/${userId}`)
        const newOrder =  orders.filter(order => order.id !== userId)
        
        setOrders(newOrder)
    }
    return <Container>

        <ImgBurger alt='imagem-logo-code-burger' src={Burger} />

        <ConteinerItens>
            <H1>Faça Seu Pedido</H1>
            <InputLabel>Pedido</InputLabel>
            <Input ref={inputOrder}></Input>
            <InputLabel>Nome do Cliente</InputLabel>
            <Input ref={inputClint}></Input>
            <ButtonOrder onClick={addOrder}>Novo Pedido</ButtonOrder>

            <ul>
                {orders.map(order => (

                    <CardOrder key={order.id}>
                        <p>{order.order}</p> <span>{order.clienteName}</span>
                        <button onClick={() =>deleteOrder(order.id)}> <img alt='lata-de-lixo' src={Trash} /> </button>
                    </CardOrder>

                ))
                }

            </ul>

        </ConteinerItens>



    </Container>






}

export default Order 