import React from 'react'
import Logo from '../../images/logo.png'
import GooglePlay from '../../images/google-play.png'
import AppStore from '../../images/app store.png'
import './styles.scss'

const Footer = () => {
  return (
        <div className="container_footer">
            <div className="footer_logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="footer_tabs">
                <a href="#">Home</a>
                <a href="#">Terms of use</a>
                <a href="#">Legal notices</a>
                <a href="#">Help</a>
                <a href="#">Manage Account</a>
            </div>
            <div className="footer_buttons_store">
                <div className="button_playStore">
                    <img src={GooglePlay} alt="Play Store" />
                </div>
                <div className="button_appStore">
                    <img src={AppStore} alt="App Store" />
                </div>
            </div>
            <div className="footer_copyrigth">
                Copyright 2022 Dreadfull Tomato Streaming. All Rights Reserved
            </div>
        </div>
  )
}

export default Footer
