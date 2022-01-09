const NET_ID = process.env.REACT_APP_NETWORK_ID;

export const loadContract = async (name,web3) => {
  const res = await fetch(`./contracts/abis/${name}.json`);
  const Artifact = await res.json();
  let contract = null;

  try {
    contract = new web3.eth.Contract(
      Artifact.abi,
      Artifact.networks[NET_ID].address
    )
  } catch {
    console.log('Contract KryptoFlow not found');
  }

  return contract;
}

export const getFromAddress = async name => {
  const res = await fetch(`./contracts/abis/${name}.json`);
  const Artifact = await res.json();
  let address = 0;
  try {
    address = Artifact.networks[NET_ID].address;
  } catch {
    console.log('address is not located');
  }
  return address;
}

export const getAllAddresses = async web3 => {
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

export const getAbis = async (name) => {
  const res = await fetch(`./contracts/abis/${name}.json`);
  const Artifact = await res.json();
  return Artifact;
}