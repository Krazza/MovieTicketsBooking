import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import styles from "../styles/Layout.module.css";

function Layout()
{
    return (
        <div className={styles.pageContainer}>
            <Header/>
            <Main/>
            <Footer/>
        </div>);
};

export default Layout;