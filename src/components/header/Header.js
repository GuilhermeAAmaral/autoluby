import React from 'react'

import Logo from '../../images/Logo.svg'
import LogOut from '../../images/LogOut.svg'
import AutoLuby from '../../images/AutoLuby.svg'

import { Button, LogoText, Nav } from './style'

import { goToLogin } from '../../routers/cordinator'
import { useHistory } from 'react-router-dom'


const Header = () => {

    const history = useHistory()

    const logout = () => {
        localStorage.removeItem ('token')
        goToLogin(history)
        alert ('Usuário deslogado com sucesso')
    }

    return (

        <Nav>

            <LogoText>
                <div>
                    <img src={Logo} alt= "logo"/> 
                </div>

                <div>
                    <img src={AutoLuby} alt= "autoluby"/>  
                </div>  
            </LogoText>

            <Button>
                <button onClick={logout}>
                    Sair 
                    <img src={LogOut} alt="sair"/> 
                </button>
            </Button>

        </Nav>

    )
}

export default Header