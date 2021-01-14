import Logo from './M_logo.png'
import React, { Component } from 'react';
import styles from './NavBar.module.css'

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <a href="/" className={styles.anchor}>
                    <img src={Logo} alt="logo" height="20"></img>
                    <span className={styles.name}>MS Academy</span></a>
                    {/* <Loader type="Puff" width={40}/> */}
                </div>
            </div>
        );
    }
}

export default NavBar;