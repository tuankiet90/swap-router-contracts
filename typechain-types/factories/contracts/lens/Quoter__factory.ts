/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Quoter, QuoterInterface } from "../../../contracts/lens/Quoter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_WETH9",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH9",
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
    name: "factory",
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
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "quoteExactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "quoteExactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "quoteExactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "quoteExactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
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
        name: "path",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161103938038061103983398101604081905261002f91610069565b6001600160601b0319606092831b8116608052911b1660a05261009b565b80516001600160a01b038116811461006457600080fd5b919050565b6000806040838503121561007b578182fd5b6100848361004d565b91506100926020840161004d565b90509250929050565b60805160601c60a05160601c610f6b6100ce600039806102f052508061031452806104ef52806105ec5250610f6b6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c45a01551161005b578063c45a0155146100d3578063cdca1753146100db578063f7729d43146100ee578063fa461e33146101015761007d565b80632f80bb1d1461008257806330d07f21146100ab5780634aa4a4fc146100be575b600080fd5b610095610090366004610c3f565b610116565b6040516100a29190610e9e565b60405180910390f35b6100956100b9366004610bd1565b61017b565b6100c66102ee565b6040516100a29190610df4565b6100c6610312565b6100956100e9366004610c3f565b610336565b6100956100fc366004610bd1565b610384565b61011461010f366004610ca5565b6104be565b005b60005b600061012484610595565b905060008060006101348761059d565b92509250925061014882848389600061017b565b9550831561016057610159876105ce565b965061016c565b85945050505050610175565b50505050610119565b92915050565b60006001600160a01b03808616878216109083166101995760008490555b6101a48787876105e5565b6001600160a01b031663128acb0830836101bd88610623565b6000036001600160a01b038816156101d557876101fb565b856101f45773fffd8963efd1fc6a506488495d951d5263988d256101fb565b6401000276a45b8b8b8e60405160200161021093929190610da1565b6040516020818303038152906040526040518663ffffffff1660e01b815260040161023f959493929190610e08565b6040805180830381600087803b15801561025857600080fd5b505af1925050508015610288575060408051601f3d908101601f1916820190925261028591810190610c82565b60015b6102e1573d8080156102b6576040519150601f19603f3d011682016040523d82523d6000602084013e6102bb565b606091505b506001600160a01b0384166102cf57600080555b6102d881610655565b925050506102e5565b5050505b95945050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60005b600061034484610595565b905060008060006103548761059d565b925092509250610368838383896000610384565b9550831561016057610379876105ce565b965050505050610339565b60006001600160a01b03808616908716106103a08787876105e5565b6001600160a01b031663128acb0830836103b988610623565b6001600160a01b038816156103ce57876103f4565b856103ed5773fffd8963efd1fc6a506488495d951d5263988d256103f4565b6401000276a45b8c8b8d60405160200161040993929190610da1565b6040516020818303038152906040526040518663ffffffff1660e01b8152600401610438959493929190610e08565b6040805180830381600087803b15801561045157600080fd5b505af1925050508015610481575060408051601f3d908101601f1916820190925261047e91810190610c82565b60015b6102e1573d8080156104af576040519150601f19603f3d011682016040523d82523d6000602084013e6104b4565b606091505b506102d881610655565b60008313806104cd5750600082135b6104d657600080fd5b60008060006104e48461059d565b9250925092506105167f00000000000000000000000000000000000000000000000000000000000000008484846106d2565b50600080600080891361054257856001600160a01b0316856001600160a01b031610888a60000361055d565b846001600160a01b0316866001600160a01b03161089896000035b925092509250821561057457604051818152602081fd5b6000541561058a57600054811461058a57600080fd5b604051828152602081fd5b516042111590565b600080806105ab84826106e8565b92506105b88460146107b4565b90506105c58460176106e8565b91509193909250565b805160609061017590839060179060161901610870565b600061061b7f00000000000000000000000000000000000000000000000000000000000000006106168686866109eb565b610a41565b949350505050565b60007f8000000000000000000000000000000000000000000000000000000000000000821061065157600080fd5b5090565b600081516020146106be5760448251101561068b5760405162461bcd60e51b815260040161068290610e67565b60405180910390fd5b600482019150818060200190518101906106a59190610cf3565b60405162461bcd60e51b81526004016106829190610e4d565b818060200190518101906101759190610d5d565b60006102e5856106e38686866109eb565b610b3d565b600081826014011015610742576040805162461bcd60e51b815260206004820152601260248201527f746f416464726573735f6f766572666c6f770000000000000000000000000000604482015290519081900360640190fd5b816014018351101561079b576040805162461bcd60e51b815260206004820152601560248201527f746f416464726573735f6f75744f66426f756e64730000000000000000000000604482015290519081900360640190fd5b5001602001516c01000000000000000000000000900490565b60008182600301101561080e576040805162461bcd60e51b815260206004820152601160248201527f746f55696e7432345f6f766572666c6f77000000000000000000000000000000604482015290519081900360640190fd5b8160030183511015610867576040805162461bcd60e51b815260206004820152601460248201527f746f55696e7432345f6f75744f66426f756e6473000000000000000000000000604482015290519081900360640190fd5b50016003015190565b60608182601f0110156108ca576040805162461bcd60e51b815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b828284011015610921576040805162461bcd60e51b815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b81830184511015610979576040805162461bcd60e51b815260206004820152601160248201527f736c6963655f6f75744f66426f756e6473000000000000000000000000000000604482015290519081900360640190fd5b60608215801561099857604051915060008252602082016040526109e2565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156109d15780518352602092830192016109b9565b5050858452601f01601f1916604052505b50949350505050565b6109f3610b60565b826001600160a01b0316846001600160a01b03161115610a11579192915b50604080516060810182526001600160a01b03948516815292909316602083015262ffffff169181019190915290565b600081602001516001600160a01b031682600001516001600160a01b031610610a6957600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b6bffffffffffffffffffffffff191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b6000610b498383610a41565b9050336001600160a01b0382161461017557600080fd5b604080516060810182526000808252602082018190529181019190915290565b600082601f830112610b90578081fd5b8135610ba3610b9e82610ecb565b610ea7565b818152846020838601011115610bb7578283fd5b816020850160208301379081016020019190915292915050565b600080600080600060a08688031215610be8578081fd5b8535610bf381610f1d565b94506020860135610c0381610f1d565b9350604086013562ffffff81168114610c1a578182fd5b9250606086013591506080860135610c3181610f1d565b809150509295509295909350565b60008060408385031215610c51578182fd5b823567ffffffffffffffff811115610c67578283fd5b610c7385828601610b80565b95602094909401359450505050565b60008060408385031215610c94578182fd5b505080516020909101519092909150565b600080600060608486031215610cb9578283fd5b8335925060208401359150604084013567ffffffffffffffff811115610cdd578182fd5b610ce986828701610b80565b9150509250925092565b600060208284031215610d04578081fd5b815167ffffffffffffffff811115610d1a578182fd5b8201601f81018413610d2a578182fd5b8051610d38610b9e82610ecb565b818152856020838501011115610d4c578384fd5b6102e5826020830160208601610eed565b600060208284031215610d6e578081fd5b5051919050565b60008151808452610d8d816020860160208601610eed565b601f01601f19169290920160200192915050565b606093841b6bffffffffffffffffffffffff19908116825260e89390931b7fffffff0000000000000000000000000000000000000000000000000000000000166014820152921b166017820152602b0190565b6001600160a01b0391909116815260200190565b60006001600160a01b038088168352861515602084015285604084015280851660608401525060a06080830152610e4260a0830184610d75565b979650505050505050565b600060208252610e606020830184610d75565b9392505050565b60208082526010908201527f556e6578706563746564206572726f7200000000000000000000000000000000604082015260600190565b90815260200190565b60405181810167ffffffffffffffff81118282101715610ec357fe5b604052919050565b600067ffffffffffffffff821115610edf57fe5b50601f01601f191660200190565b60005b83811015610f08578181015183820152602001610ef0565b83811115610f17576000848401525b50505050565b6001600160a01b0381168114610f3257600080fd5b5056fea264697066735822122003c0824ae516b4380435720227fee6b15e904224358fa2a9a058cea49aba4b2764736f6c63430007060033";

type QuoterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: QuoterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Quoter__factory extends ContractFactory {
  constructor(...args: QuoterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _factory: PromiseOrValue<string>,
    _WETH9: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Quoter> {
    return super.deploy(_factory, _WETH9, overrides || {}) as Promise<Quoter>;
  }
  override getDeployTransaction(
    _factory: PromiseOrValue<string>,
    _WETH9: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _WETH9, overrides || {});
  }
  override attach(address: string): Quoter {
    return super.attach(address) as Quoter;
  }
  override connect(signer: Signer): Quoter__factory {
    return super.connect(signer) as Quoter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QuoterInterface {
    return new utils.Interface(_abi) as QuoterInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Quoter {
    return new Contract(address, _abi, signerOrProvider) as Quoter;
  }
}