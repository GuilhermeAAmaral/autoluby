import styled from 'styled-components'

export const ContainerPrincipal = styled.main`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    width: 800px;
    
    h1 {
        color: #495057;

        padding-top: 25px;
        padding-left: 275px;
        padding-bottom: 10px;
    }

    p {
        color: #858585;
        padding-left: 275px;
        padding-bottom: 30px;
    }
    
`

export const Info = styled.div`
    width: 800px;

    h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 39px;

        color: #495057;

        padding-top: 25px;
        padding-left: 20px;
        padding-bottom: 20px;
    }

    p {

        font-weight: 500;

        padding-left: 20px;

        color: #858585;
    }

    span {
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 19px;

        color: #F54A48;
        
        position: relative;
        top: 40px;
        left: 420px;
    }

`

export const Photo = styled.div`

`

export const Card = styled.div`

    display: flex;

    width: 800px;
    height: 202px;

    margin: 10px auto;

    background: #FFFFFF;

    border: 1px solid #E6E6E6;
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
    border-radius: 3px;

    &:hover {
        cursor: pointer;
    }
  
`