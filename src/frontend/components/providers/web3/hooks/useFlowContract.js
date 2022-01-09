import { useEffect } from "react";
import useSWR from "swr";
import Contract from 'web3-eth-contract';

export const handler =  (web3, provider) => () => {
  const { data, methods, ...rest } = useSWR(() => {
      return web3 ? "web3/contract" : null },
      async () => {
        const netId = await web3.eth.net.getId();
        const res = await fetch('./contracts/abis/KryptoFlow.json');
        const Artifact = await res.json();
        console.log('Artifact in hook', Artifact)
        // const contractData = await KryptoFlow.networks[netId];
        // if(contractData) {
        //   const address = contractData.address;
        //   const abi = KryptoFlow.abi;
        //   const contract = new Contract(abi, address);
        //   return contract;
        // }
  });

  

  return { contract: {
      data,
      methods,
      ...rest
  }}
}
