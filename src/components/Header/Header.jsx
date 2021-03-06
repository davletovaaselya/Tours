import React from 'react'
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom'
import style from './Header.module.scss'

function Header() {
    return (
        <div className={style.headerWrapper}>
            <Link to='/'><div><img  src='/Images/logo.png' alt='logo'/></div></Link>
            <div className={style.navigation} >
                <Navigation/>
            </div>
        </div>
    )
}

export default Header
