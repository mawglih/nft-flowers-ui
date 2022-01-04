import { useWeb3 } from '../../providers';
import { useAccount } from '../../../hooks/web3/';
import '../../App.css';
import Button from '../common/button';

const NavBar = ({
    title,
}) => {
    const { connect, isLoading, isWeb3Loaded } = useWeb3();
    const { account } = useAccount();
    console.log('account', account);
    console.log('isAdmin', account.isAdmin);
    console.log('all web3api', useWeb3());
    return (
        <div className="navbar-container">
            <div className="navbar-title">{title}</div>
            <div className="navbar-account">{account.data}</div>
            <div className='navbar-btn'>
                { isLoading ?
                    <Button
                    disabled={true}
                    classname="btn-loading"
                    >
                        Loading...
                    </Button> :
                    isWeb3Loaded ?
                    account.data ?
                    <Button
                    classname="btn-loaded"
                    disabled={true}
                    >
                        Ready to rock'n roll dear {account.isAdmin ? "Admin" : "Customer"}
                    </Button> :
                    <Button
                    onClick={connect}
                    classname="btn-connect"
                    >
                        Connect
                    </Button> :
                    <Button
                    onClick={() => window.open("https://metamask.io/download.html", "_blank")}
                    classname="btn-install"
                    >
                    Install Metamask
                    </Button>
                }
            </div>
        </div>
    )
}

export default NavBar;
