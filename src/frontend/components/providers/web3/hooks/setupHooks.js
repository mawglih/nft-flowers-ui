import { handler as createUseAccount } from "./useAccount";
import { handler as createUseNetwork } from "./useNetwork";
import { handler as createFlowContract } from "./useFlowContract";

export const setupHooks = (...deps) => {
    return {
        useAccount: createUseAccount(...deps),
        useNetwork: createUseNetwork(...deps),
        useFlowContract: createFlowContract(...deps),
    }
}
