import React from 'react'
import './styles.scss'
import logo from '../../images/logo.png'
import iconLogin from '../../images/icon-login.png'

const Header = () => {
  return (
        <div className="header_container">
          <div className="header_container__content">
            <div className="logo_header">
              <img src={logo} alt="" />
            </div>
            <div className="buttons">
              <div className="button_login">
                <div>Login</div>
                <div className="icon_login">
                  <img src={iconLogin} alt="" />
                </div>
              </div>
              <div className="button_trial">
                <p>Star your free trial</p>
              </div>
            </div>
            <span className="material-symbols-outlined">
            menu
            </span>
          </div>
        </div>
  )
}

export default Header
