import React from 'react'
import {LoginWrapper, LoginButton} from "./../../components/LoginControls"
import {Navigate} from "react-router-dom"

export default function Login() {
    const [isLoggedin, setLoggedIn] = React.useState(false)

    const handleredirect = ()=>{
        setLoggedIn(x=>!x)
    }
    
    if(isLoggedin){
      return <Navigate to="/video"/>
    } return (
        <LoginWrapper>
            <LoginButton onClick={handleredirect}>Login</LoginButton>
        </LoginWrapper>
    )
}
