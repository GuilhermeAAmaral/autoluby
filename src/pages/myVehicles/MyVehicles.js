import React, {useContext} from 'react'
import Header from '../../components/header/Header'

import { Title, ContainerPrincipal } from './style'

import GlobalContext from '../../global/GlobalContext'

const MyVehicles = () => {

    const { state } = useContext(GlobalContext)

    const vehicles = state.loginData.user.vehicles

    console.log ('chegou meus veículos', vehicles)

    return (

        <>
            <Header />

            <Title>
                <h1>Seus Veículos</h1>
            </Title>

            <ContainerPrincipal>

                <h3>Listagem de veículos reservados e vendidos</h3>

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
                    {vehicles.map (data => {
                        return (
                            <tr>
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
                                    }).format(data.value)}
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </ContainerPrincipal>
        </>
    )
}

export default MyVehicles