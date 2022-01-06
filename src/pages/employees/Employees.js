import React, { useContext, useEffect } from 'react'
import Header from '../../components/header/Header'

import GlobalContext from '../../global/GlobalContext'
import useProtectedPage from '../../hooks/useProtectedPage'

import { Title, ContainerPrincipal } from './style'

const Employees = () => {

    useProtectedPage()

    const { state, requests } = useContext(GlobalContext)

    useEffect(() => {

        requests.employees()
    
    }, [])

    return (

        <>
            <Header />

            <Title>
                <h1>Funcionários</h1>
            </Title>

            <ContainerPrincipal>

                <h3>Listagem de funcionários da empresa</h3>

                <table>
                    <thead>
                        <tr>
                            <th>NOME</th>
                            <th>EMAIL</th>
                            <th>CPF</th>
                            <th>VALOR</th>
                            <th>BIO</th>
                        </tr>
                    </thead>

                    <tbody>
                        {state.employeesData.map (data => {
                            return (
                                <tr key={data.name}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.cpf}</td>
                                    <td>{data.salary}</td>
                                    <td>{data.bio}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </ContainerPrincipal>
        </>    
    )
}

export default Employees