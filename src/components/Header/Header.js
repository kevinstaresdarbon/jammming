import React, { useEffect } from 'react';
import styles from './header.module.css';

import logo from '../../logo.png';
import Search from '../Search/Search';

export default function Header({ profile }) {

    async function handleLoginClick() {
        window.location.href = 'https://jammin_api.unchained.vip/api/login';
    }

    return (
        <header className={styles.app_header}>
            <figure className={styles.app_logo}>
                <img className={styles.app_logo_spin} src={logo} alt="logo: A spinning star" />
            </figure>
            <h1>Jammin</h1>
            <nav>
                {(!profile) ? (
                    <button type='button' onClick={handleLoginClick}>Log In with Spotify</button>
                    ) : ( 
                    <div className={styles.profile_menu}> 
                        <picture>
                            <img src={profile.profile_picture} />
                        </picture>
                        <h1>{profile.display_name}</h1>
                    </div>
                    
                )}
            </nav>
        </header>
    )
}