import React from 'react';
import { Web3Provider } from '../../providers';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children}) {
    return(
        <Web3Provider>
            <div>
                <NavBar title="1-800-Flowers NFT"/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </Web3Provider>
    )
}
