import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Login';
import Nav_bar from './components/Navbar';
import Signup from './components/Signup';
import './styles/main.css'
import Info from './components/Info';

import { useGlobalState, setGlobalState } from './components/Globalstates'

function App() {
    const [signup_state] = useGlobalState('signupstate')
    const [login_state] = useGlobalState('loginstate')
    const [info_state] = useGlobalState('infostate')
    const [home_state] = useGlobalState('homestate')

    return (

        <
        Router >
        <
        Nav_bar / > { info_state ? < Info / > : '' }


        <
        Routes >
        <
        Route path = "/signup"
        element = { < Signup / > }
        /> <
        Route path = "/nav"
        element = { < Nav_bar / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/home"
        element = { < Home / > }
        /> <
        Route path = "/info"
        element = { < Info / > }
        />

        <
        /Routes> <
        /Router>
    );
}

export default App