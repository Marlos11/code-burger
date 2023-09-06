import React from 'react'
import { Container, ImgDelivery, ConteinerItens } from '../clinte/styles'
import ButtonOrder from '../../../components/Title/Button'
import H1 from '../../../components/Title'
import Delivery from '../../../assets/Delivery.svg'


const ClintOrder = () => {
    return <Container>
        <ImgDelivery alt="imagem-pacote-de-entrega" src={Delivery} />
       
           <H1>Pedidos</H1>
           <ConteinerItens>
            
          
        </ConteinerItens>
        <ButtonOrder>Voltar</ButtonOrder>
    </Container> 
}
export default ClintOrder