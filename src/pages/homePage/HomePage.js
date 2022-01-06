import React, { useContext } from 'react'
import Header from '../../components/header/Header'

import { ContainerPrincipal, Title, Card, Info, Photo } from './style'

import Photo1 from '../../images/Photo1.png'
import Photo2 from '../../images/Photo2.png'
import Photo3 from '../../images/Photo3.png'

import GlobalContext from '../../global/GlobalContext'

import { goToAllVehicles, goToEmployees, goToMyVehicles } from '../../routers/cordinator'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'

const HomePage = () => {

    useProtectedPage()

    const { state } = useContext(GlobalContext)

    const history = useHistory()

    return (

        <>
            <Header />

            <ContainerPrincipal>

                <Title>
                    <h1>Bem-vindo, {state.loginData.user.name}</h1>
                    <p>Menu</p>    
                </Title>

                <Card onClick={()=> goToMyVehicles(history)}>
                    <Info>
                        <h1>Veículos reservados e vendidos</h1>
                        <p>Veículos reservados e vendidos por você</p>
                        <span>{state.loginData.totalVehiclesLoggedUser} Veículos</span>
                    </Info>

                    <Photo>
                        <img src={Photo1} alt="Veículos do usuário" />
                    </Photo>
                </Card>

                <Card onClick={() => goToAllVehicles (history)}>
                    <Info>   
                        <h1>Listagem geral de veículos</h1>
                        <p>Listagem de veículos de toda a empresa</p>
                        <span>{state.loginData.totalVehicles} Veículos</span>
                    </Info>

                    <Photo>
                        <img src={Photo2} alt="Veículos vendidos" />
                    </Photo>
                </Card>

                <Card onClick={() => goToEmployees(history)}>
                    <Info>
                        <h1>Funcionários da empresa</h1>
                        <p>Listagem de todos os funcionários da empresa</p>
                        <span>{state.loginData.totalEmployees} Funcionários</span>
                    </Info>

                    <Photo>
                        <img src={Photo3} alt="Funcionários" />
                    </Photo>
                </Card>

            </ContainerPrincipal>
            
        </>
    )
}

export default HomePage