import styled from "styled-components"


export const LogoText = styled.div`
    display: flex;

    div {
        margin-top: 30px;
        margin-left: 30px;
        margin-bottom: 50px;
    }
`

export const ContainerPrincipal = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;

`

export const ContainerLogin = styled.div`
    width: 500px;
    margin-left: 150px;
`

export const Title = styled.div`
    margin-bottom: 70px;

    h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 38px;
        line-height: 120%;
    }

    p {
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 120%;

        color: #7C7C7C;
    }
`

export const ContainerInput = styled.div`

    p {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;

        line-height: 120%; 

        margin-bottom: 10px;

        color: #7C7C7C;
    }

    input {
        margin-bottom: 25px;
        padding: 10px;
        width: 450px;

        background: #F9F9F9;

        border: 1px solid #E6E6E6;
        box-sizing: border-box;
        border-radius: 3px;
    }
`

export const ContainerCheckbox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;

    button {
        margin-left: 125px;
        border: 0px;
        background-color: #FFF;
        color: #F54A48;

        font-size: 14px;
        font-weight: 600;
    }

    span {
        margin-left: 10px;
        background-color: #FFF;
        color: #F54A48;

        font-size: 14px;
        font-weight: 600;
    }

    input {
        width: 24px;
        height: 24px;
        border-radius: 3px;
    }

`

export const ContainerButton = styled.div`

    margin-bottom: 30px;
    
    button {
        font-style: normal;
        font-weight: 600;

        width: 450px;
        height: 38px;
        padding: 10px;

        color: #FFF;
        background-color: #F54A48;
        
        border: 0;
        border-radius: 3px;
      
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`

export const ContainerCreateAccount = styled.div`

    span {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;

        margin-bottom: 10px;

        color: #7C7C7C;
    }

    button {
        margin-left: 10px;
        border: 0px;
        background-color: #FFF;

        color: #F54A48;

        font-size: 14px;
        font-weight: 600;
    }
`


export const ContainerImage = styled.div`

    img {
        display: block;
        position: absolute;
        top: 0px;
        left: 747px;

        width: 619px;
          
    }
`

