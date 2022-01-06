import React, { useContext, useEffect } from "react"
import Header from '../../components/header/Header'
import GlobalContext from "../../global/GlobalContext"
import useProtectedPage from "../../hooks/useProtectedPage"
import { ContainerPrincipal, Title } from "./style"

const AllVehicles = () => {

    useProtectedPage()

    const { state, requests } = useContext(GlobalContext)

    useEffect(() => {

        requests.allVehicles()
    
    }, [])

    return (

        <>
            <Header />

            <Title>
                <h1>Todos Veículos</h1>
            </Title>

            <ContainerPrincipal>

                <h3>Listagem geral de veículos</h3>

                <table>
                    <thead>
                        <tr>
                            <th>MARCA</th>
                            <th>MODELO</th>
                            <th>ANO</th>
                            <th>KM</th>
                            <th>COR</th>
                            <th>STATUS</th>
                            <th>CHASSI</th>
                            <th>VALOR</th>
                        </tr>
                    </thead>

                    <tbody>
                        {state.allVehiclesData.map (data => {
                            return (
                                <tr key={data.yer}>
                                    <td>{data.brand}</td>
                                    <td>{data.model}</td>
                                    <td>{data.yer}</td>
                                    <td>{data.km}</td>
                                    <td>{data.color}</td>
                                    <td>{data.status}</td>
                                    <td>{data.chassi}</td>
                                    <td>{new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(data.value)} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </ContainerPrincipal>
        </>    
    )
}

export default AllVehicles