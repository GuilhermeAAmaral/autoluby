import React, { useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'

import axios from 'axios'

import { BASE_URL } from '../constantes/urls'
import { goToHome } from '../routers/cordinator'
import { useHistory } from 'react-router-dom'

const GlobalState = (props) => {

    const [inputEmail, setInputEmail] = useState ("")
    const [inputPassword, setInputPassword] = useState ("")

    const [loginData, setLoginData] = useState ([])
    const [employeesData, setEmployeesData] = useState ([])
    const [allVehiclesData, setAllVehiclesData] = useState ([])

    const history = useHistory()

    const login = () => {
        
        const body = {
            email: inputEmail,
            password: inputPassword
        }

        axios.post (`${BASE_URL}/login`, body)

        .then((res) => {
            localStorage.setItem ('token', res.data.token)
            setLoginData (res.data)
            goToHome(history)
            alert ('Usuário logado com sucesso')
        })
        .catch((err) => {
            alert (err)
        })
    }

    const allVehicles = () => {

        axios.get(`${BASE_URL}/vehicles?noPaginate`, {

            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                Authorization: 'Bearer 9C263441B59BBD25E47A4F6AD2483F35'
            }
        })

        .then ((res) => {
            setAllVehiclesData (res.data.vehicles)
        })
        .catch ((err) => {
            console.log (err.data)
        })
    }

    const employees = () => {

        axios.get(`${BASE_URL}/employees?noPaginate`, {

            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                Authorization: 'Bearer 9C263441B59BBD25E47A4F6AD2483F35'
            }
        })

        .then ((res) => {
            setEmployeesData (res.data.employees)
        })
        .catch ((err) => {
            console.log (err.data)
        })
    }

    const state = {inputEmail, setInputEmail, inputPassword, setInputPassword, loginData, employeesData, allVehiclesData}
    const setters = {}
    const requests = {login, employees, allVehicles}

    return (
        <GlobalContext.Provider value = {{state, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState