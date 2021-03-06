import styled from 'styled-components'
export const Container = styled.div`
    height: 840px;
    h2{
        color: black;
        font-size: 27px;
    }  width: 100vw;
    max-width: 500px;
    border-radius: 5px;
    background-color: #fff;
    text-align: center;
    form{
        margin: 0 auto;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align:center;
        height: 700px;
    }
    button{
        margin: 0 auto;
        background-color: #FF715B;
        color: white;
        font-size: 24px;
        border: none;
        width: 250px;
        max-width: 200px;
        border-radius: 10px;
        padding: 10px;
        cursor: pointer;
        box-shadow: 5px 5px rgb(240, 105, 70);
        transition: 0.5s;
        margin-bottom: 10px;
        display: block;
    }
    button:hover{
        box-shadow: 1px 3px rgb(255, 113, 70);   
    }
    @media screen and (min-width:768px){
        height: 500px;
        border: 1px solid;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        overflow-y: hidden;
    }
`