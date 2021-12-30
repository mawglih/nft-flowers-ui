import { useEffect } from "react";
import useSWR from "swr";

const adminAddress = {"0xED036C32E6d551a35680F3c619f10b08fC93EeFf": true };
export const handler =  (web3, provider) => () => {
    const { data, mutate, ...rest } = useSWR(() => {
        return web3 ? "web3/accounts" : null },
        async () => {
            const accounts = await web3.eth.getAccounts();
            return accounts[0];
    });

    useEffect(() => {
        provider && provider.on("accountChnaged", accounts => mutate(accounts[0] ?? null));
    }, [provider])
    return { account: {
        data,
        isAdmin: (data && adminAddress[data]) ?? false,
        mutate,
        ...rest
    }}
}