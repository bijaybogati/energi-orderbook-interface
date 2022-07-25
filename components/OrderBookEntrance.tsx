import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddresses } from "../constants";
import { useEffect, useState } from "react";
import { BigNumber, ethers, ContractTransaction } from "ethers";

interface contractAddressesInterface {
  [key: string]: string[];
}

export default function OrderBookEntrance() {
  const addresses: contractAddressesInterface = contractAddresses;
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId: string = parseInt(chainIdHex!).toString();
  const orderBookAddress = chainId in addresses ? addresses[chainId][0] : null;

  const {
    runContractFunction: getOrderBook,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: orderBookAddress!, // specify the networkId
    functionName: "getOrderBook",
    params: {},
    msgValue: "",
  });

  async function updateUI() {
    const something = await getOrderBook();
    console.log(something);
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUI();
    }
  }, [isWeb3Enabled]);

  return <div>Hello Orderbook</div>;
}
