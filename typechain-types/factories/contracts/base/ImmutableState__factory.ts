/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ImmutableState,
  ImmutableStateInterface,
} from "../../../contracts/base/ImmutableState";

const _abi = [
  {
    inputs: [],
    name: "factoryV2",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "positionManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ImmutableState__factory {
  static readonly abi = _abi;
  static createInterface(): ImmutableStateInterface {
    return new utils.Interface(_abi) as ImmutableStateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ImmutableState {
    return new Contract(address, _abi, signerOrProvider) as ImmutableState;
  }
}
