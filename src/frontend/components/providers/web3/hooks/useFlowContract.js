import useSWR from "swr";
import Contract from 'web3-eth-contract';
import KryptoFlow from "../../../../../backend/abis/KryptoFlow.json";

export const handler =  (web3, provider) => () => {
  const { data, ...rest } = useSWR(() => {
      return web3 ? "web3/contract" : null },
      async () => {
        const netId = await web3.eth.net.getId();
        const contractData = await KryptoFlow.networks[netId];
        if(contractData) {
          const address = contractData.address;
          const abi = KryptoFlow.abi;
          const contract = new Contract(abi, address)
          return contract;
        }
  });

  return { contract: {
      data,
      ...rest
  }}
}
