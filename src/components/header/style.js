import styled from "styled-components"


export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 25px rgba(169, 169, 169, 0.2);

`

export const LogoText = styled.div`
    display: flex;
    margin-left: 30px;

    div {
        margin-top: 30px;
        margin-left: 30px;
        margin-bottom: 30px;
    }

`

export const Button = styled.div`
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 80px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        font-style: normal;
        font-weight: 600;

        width: 75px;
        height: 38px;
        padding: 10px;

        color: #FFF;
        background-color: #F54A48;
        
        border: 0;
        border-radius: 3px;
      


        img {
            margin-left: 5px;
        }

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`

