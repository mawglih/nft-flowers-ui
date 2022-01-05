import React from 'react';
import { Web3Provider } from '../../providers';
import NavBar from './NavBar';
import WalletBar from './WalletBar'
import Footer from './Footer';

export default function Layout({ children}) {
    return(
        <Web3Provider>
            <div>
                <NavBar title="1-800-Flowers NFT"/>
                <WalletBar />
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </Web3Provider>
    )
}
