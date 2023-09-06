import styled from 'styled-components'

export const Container = styled.div`


min-height:100vh; 
width: 414px;
margin: auto;



display: flex;
flex-direction: column;
justify-content: center;
align-items: center;



background-color: #0A0A10 

`

export const ImgBurger = styled.img`

margin-bottom: 50px;

`

export const ConteinerItens = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`



export const InputLabel = styled.p`
font-weight: 700;
font-size: 18px;
line-height: 22px;
color:#eeeeee

`

export const Input = styled.input`
padding: 19px 139px 18px 15px;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
margin-bottom: 64px;

color: #FFF;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;

`

export const CardOrder = styled.li`
width: 342px;
height: 101px;

border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
margin-bottom:18px;
padding: 19px 139px 18px 15px;
display:flex;
justify-content: space-between;
gap:20;
align-items: center;

span{
    color: #FFF;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal
}
button{
    border: none;
    background: none;
    cursor: pointer;

}

`

