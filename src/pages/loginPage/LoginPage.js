import React, { useContext } from 'react'
import { ContainerImage, ContainerLogin, ContainerPrincipal, Title, ContainerInput, ContainerCheckbox, ContainerButton, ContainerCreateAccount, LogoText } from './style'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'

import Logo from '../../images/Logo.svg'
import AutoLuby from '../../images/AutoLuby.svg'

import PhotoVehiclesHomePage from '../../images/PhotoVehiclesHomePage.svg'
import GlobalContext from '../../global/GlobalContext'


const LoginPage = () => {

    useUnProtectedPage()

    const {state, requests} = useContext(GlobalContext)

    const onChangeInputEmail = (event) => {
        state.setInputEmail (event.target.value)
    }

    const onChangeInputPassword = (event) => {
        state.setInputPassword (event.target.value)
    }

    return (

        <>
            <LogoText>
                <div>
                    <img src={Logo} alt="logo" />
                </div>

                <div>
                    <img src={AutoLuby} alt="autoluby" />
                </div>
            </LogoText>

            <ContainerPrincipal>

                <ContainerLogin>

                    <Title>
                        <h1>Bem-vindo à AutoLuby</h1>
                        <p>Faça o login para acessar sua conta.</p>
                    </Title>

                    <ContainerInput>
                        <p>Endereço de Email</p>
                        <input 
                            placeholder='@email.com'
                            onChange={onChangeInputEmail}
                            value={state.inputEmail}
                        />
                    </ContainerInput>

                    <ContainerInput>
                        <p>Senha</p>
                        <input
                            type="password" 
                            placeholder='senha'
                            onChange={onChangeInputPassword}
                            value={state.inputPassword}
                        />
                    </ContainerInput>

                    <ContainerCheckbox>
                        <input type="checkbox" />
                        <span>Lembrar minha senha</span>
                        <button>Esqueceu a senha?</button>
                    </ContainerCheckbox>

                    <ContainerButton>
                        <button onClick={requests.login}>
                            Entrar
                        </button>
                    </ContainerButton>

                    <ContainerCreateAccount>
                        <span>Ainda não tem conta?</span>
                        <button>Criar Conta</button>
                    </ContainerCreateAccount>

                </ContainerLogin>

                <ContainerImage>
                    <img src={PhotoVehiclesHomePage} alt="" />
                </ContainerImage>

            </ContainerPrincipal>

        </>
    )
}

export default LoginPage