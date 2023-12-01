/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestUniswapV3Callee,
  TestUniswapV3CalleeInterface,
} from "../../../contracts/test/TestUniswapV3Callee";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "swap0ForExact1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "swap1ForExact0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "swapExact0For1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "swapExact1For0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610689806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063e2be910911610050578063e2be9109146100e6578063f603482c14610122578063fa461e331461015e57610067565b80636dfc0ddb1461006c578063bac7bf78146100aa575b600080fd5b6100a86004803603608081101561008257600080fd5b506001600160a01b038135811691602081013591604082013581169160600135166101da565b005b6100a8600480360360808110156100c057600080fd5b506001600160a01b03813581169160208101359160408201358116916060013516610318565b6100a8600480360360808110156100fc57600080fd5b506001600160a01b038135811691602081013591604082013581169160600135166103d7565b6100a86004803603608081101561013857600080fd5b506001600160a01b038135811691602081013591604082013581169160600135166103f2565b6100a86004803603606081101561017457600080fd5b81359160208101359181019060608101604082013564010000000081111561019b57600080fd5b8201836020820111156101ad57600080fd5b803590602001918460018302840111640100000000831117156101cf57600080fd5b50909250905061040d565b836001600160a01b031663128acb088360016101f587610621565b853360405160200180826001600160a01b031681526020019150506040516020818303038152906040526040518663ffffffff1660e01b815260040180866001600160a01b031681526020018515158152602001848152602001836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561029757818101518382015260200161027f565b50505050905090810190601f1680156102c45780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b1580156102e657600080fd5b505af11580156102fa573d6000803e3d6000fd5b505050506040513d604081101561031057600080fd5b505050505050565b836001600160a01b031663128acb0883600161033387610621565b600003853360405160200180826001600160a01b031681526020019150506040516020818303038152906040526040518663ffffffff1660e01b815260040180866001600160a01b031681526020018515158152602001848152602001836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360008381101561029757818101518382015260200161027f565b836001600160a01b031663128acb088360006101f587610621565b836001600160a01b031663128acb0883600061033387610621565b60008282602081101561041f57600080fd5b50356001600160a01b03169050600085131561052557336001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561046e57600080fd5b505afa158015610482573d6000803e3d6000fd5b505050506040513d602081101561049857600080fd5b5051604080516323b872dd60e01b81526001600160a01b03848116600483015233602483015260448201899052915191909216916323b872dd9160648083019260209291908290030181600087803b1580156104f357600080fd5b505af1158015610507573d6000803e3d6000fd5b505050506040513d602081101561051d57600080fd5b5061061a9050565b6000841361052f57fe5b336001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561056857600080fd5b505afa15801561057c573d6000803e3d6000fd5b505050506040513d602081101561059257600080fd5b5051604080516323b872dd60e01b81526001600160a01b03848116600483015233602483015260448201889052915191909216916323b872dd9160648083019260209291908290030181600087803b1580156105ed57600080fd5b505af1158015610601573d6000803e3d6000fd5b505050506040513d602081101561061757600080fd5b50505b5050505050565b60007f8000000000000000000000000000000000000000000000000000000000000000821061064f57600080fd5b509056fea264697066735822122019a45656a5e7b122dbc5e0897d4c2487dc46794f4c36afaf7da319c9da1ee5ad64736f6c63430007060033";

type TestUniswapV3CalleeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestUniswapV3CalleeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestUniswapV3Callee__factory extends ContractFactory {
  constructor(...args: TestUniswapV3CalleeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestUniswapV3Callee> {
    return super.deploy(overrides || {}) as Promise<TestUniswapV3Callee>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestUniswapV3Callee {
    return super.attach(address) as TestUniswapV3Callee;
  }
  override connect(signer: Signer): TestUniswapV3Callee__factory {
    return super.connect(signer) as TestUniswapV3Callee__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUniswapV3CalleeInterface {
    return new utils.Interface(_abi) as TestUniswapV3CalleeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUniswapV3Callee {
    return new Contract(address, _abi, signerOrProvider) as TestUniswapV3Callee;
  }
}
