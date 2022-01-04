import { useHooks } from "../../components/providers/web3";

export const useAccount = () => {
  return useHooks(hooks => hooks.useAccount)()
}

export const useNetwork = () => {
  return useHooks(hooks => hooks.useNetwork)()
}

export const useWallet = () => {
  const { account } = useAccount();
  const { network } = useNetwork();
  const canPurchase =  !!(account.data && network.isSupported);
  console.log('Can purchase?', canPurchase);
  return {
    account,
    network,
    canPurchase
  }
}