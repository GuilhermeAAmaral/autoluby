import styled from 'styled-components'

export const Title = styled.div`

    h1 {
        padding-left: 85px;
        padding-top: 30px;

        font-style: normal;
        font-weight: 600;
        font-size: 30px;

        color: #495057;
    }
`

export const ContainerPrincipal = styled.main`

    width: 1200px;

    margin: 70px auto;
    padding: 25px;

    background: #FFFFFF;

    border: 1px solid #E6E6E6;
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
    border-radius: 3px;
    

    h3 {
        padding-left: 30px;
        padding-bottom: 20px;

        color: #495057;

        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;

    }

    table {
        width: 1100px;
        height: 71px;
        border-spacing: 0 0.5rem;
        margin: 0 auto;

        th {
            background: #F9F9F9;
            border-radius: 3px;
            font-weight: 400;
            padding: 20px;
            text-align: left;
            line-height: 1.5rem;

            color: #858585;
        }

        td {
            padding: 20px;
            border: 0;

            color: #495057;
        }
    }
`