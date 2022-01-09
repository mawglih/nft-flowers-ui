// Clation
    const loadBlockchainData = async ()=> {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({account:accounts[0]})

        // create a constant js variable networkId which 
        //is set to blockchain network id 
        const networkId = await web3.eth.net.getId()
    const networkData = KryptoBird.networks[networkId]
         if(networkData) {
             // EXERCISE TIME!!!! :)
             // 1. create a var abi set to the Kryptobird abi
             // 2. create a var address set to networkData address
             // 3. create a var contract which grabs a 
             //new instance of web3 eth Contract  
             // 4. log in the console the var contract successfully - GOOD LUCK!!!!

             const abi = KryptoBird.abi;
             const address = networkData.address; 
             const contract = new web3.eth.Contract(abi, address)
             this.setState({contract})

             // call the total supply of our Krypto Birdz 
             // grab the total supply on the front end and log the results
             // go to web3 doc and read up on methods and call 
             const totalSupply = await contract.methods.totalSupply().call()
            this.setState({totalSupply})
            // set up an array to keep track of tokens 
            // load KryptoBirdz
            for(let i = 1; i <= totalSupply; i++) {
                const KryptoBird = await contract.methods.kryptoBirdz(i - 1).call()
                // how should we handle the state on the front end? 
                this.setState({
                    kryptoBirdz:[...this.state.kryptoBirdz, KryptoBird]
                })
            }
         } else {
             window.alert('Smart contract not deployed')
         }
        //  Clarion
